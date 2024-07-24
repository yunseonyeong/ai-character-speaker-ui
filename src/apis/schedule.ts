import axios from "axios";
import { url } from ".";

export async function createSchedule(item: any) {
    const res = await axios.post(`${url}/schedule`, {
        character: item.character,
        content: item.content,
        schedule: {
            timestamp: item.timestamp
        }
    }).then((res: any) => res.data)

    return res;
}

export async function getAllSchedules() {
    const res = await axios.get(`${url}/schedule`).then((res: any)=>res.data.data);
    return res;
}

export async function deleteScheduleById(voiceId: string) {
    await axios.delete(`${url}/schedule/${voiceId}`)
}