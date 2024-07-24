from fastapi import APIRouter, Body
from fastapi.encoders import jsonable_encoder
from repository.voice import (
    find_scheduled_voice,
    create_schedule_voice,
    delete_schedule_voice,
    run_schedule,
)
from models.voice import Voice, CreateVoice, CreateScheduleVoice
from utils.hardwareService import sendVoiceToHardwareService
from common.response import Response
from apscheduler.schedulers.background import BackgroundScheduler
from datetime import datetime, timedelta
from apscheduler.schedulers.asyncio import AsyncIOScheduler
from apscheduler.triggers.date import DateTrigger
import tracemalloc
import pytz
from zoneinfo import ZoneInfo
import asyncio
from functools import partial
tracemalloc.start()
router = APIRouter()
# scheduler = BackgroundScheduler(timezone="Asia/Seoul", daemon=True)
# scheduler = BackgroundScheduler(daemon=True)
scheduler = AsyncIOScheduler()
# asyncio.get_event_loop().run_forever()
@router.get("")
async def get_schedule_list():
    schedule = await find_scheduled_voice()
    if schedule:
        return Response(schedule, "success")
    return Response(schedule, "empty")
async def create_schedule_job(voice):
    # global scheduler
    # print(voice)
    # print(scheduler.get_jobs)
    # result = await run_schedule(voice)
    # return result
    print(f"Running job with voice: {voice}")
    await asyncio.sleep(2)  # Simulate processing
    print(f"Processed voice data: {voice}")
    return "OK"
@router.post("")
async def create_schedule(voice: CreateScheduleVoice = Body(...)):
    global scheduler
    new_voice = await create_schedule_voice(jsonable_encoder(voice))
    timestamp = int(new_voice["schedule"]["timestamp"])
    timezone = pytz.timezone("Asia/Seoul")
    naive_datetime = datetime.fromtimestamp(timestamp)
    run_date = timezone.localize(naive_datetime)
    # UTC로 변환
    # run_date = run_date.astimezone(pytz.utc)
    print(run_date)
    print(datetime.now())
    try:
        scheduler.add_job(
            create_schedule_job,
            DateTrigger(run_date=run_date),
            id=new_voice["voice_id"],
            args=[new_voice],
        )
    except ValueError as e:
        print(f"Error adding job: {e}")
    scheduler.print_jobs()
    if not scheduler.running:
        scheduler.start()
        print("Scheduler started")
    return Response(new_voice, "success")
async def remove_schedule_job(id):
    global scheduler
    if scheduler is not None:
        scheduler.remove_job(id)
        return "schedule removed"
    return "no schedule"
@router.delete("/{id}")
async def delete_schedule(id: str):
    t_schedule = await delete_schedule_voice(id)
    removed = await remove_schedule_job(id)
    result = {"action": t_schedule, "result": removed}
    return Response(result, "success")









