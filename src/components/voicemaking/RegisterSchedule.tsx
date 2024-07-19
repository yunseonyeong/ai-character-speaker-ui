import clock from '@image/clock.png';
import { GreyScale } from "@utils/constant/color";
import { addMonths } from "date-fns";
import Image from "next/image";
import { useRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from "styled-components";


const RegisterSchedule = (props: any) => {
  const datepickerRef = useRef(null);
  
  const [formattedTime, setFormattedTime] = useState<Date>(new Date());
  
  const handleTimeChange = (selectedTime: any) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const fTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;// 출력: "12:00"

    const timeStringToDate = (timeString: string): Date => {
      const today = new Date();
      const [hours, minutes] = timeString.split(':').map(Number);
      const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
      return dateWithTime;
    };
    const st = timeStringToDate(fTime); // timepicker 박스에 표현해줄 변수
    setFormattedTime(st)
  };

  return (
    <>
    <ClockImg>
      <Image src={clock} alt="clock" />
    </ClockImg>
    <Title>예약 시간을 설정해주세요</Title>
    <SubTitle>예약된 시간에 목소리를 재생해요.</SubTitle>
    <Schedule>
      <Column>
      <Text>날짜</Text>
      <div className="datepicker" >
      <ReactDatePicker
        ref={datepickerRef}
        shouldCloseOnSelect
        dateFormat="yyyy-MM-dd"
        placeholderText="선택하세요"
        id="datepicker1"
        selected={props.selectedDate} // 선택된 날짜를 ReactDatePicker에 전달
        onChange={(date) => props.setSelectedDate(date as Date)}
        minDate={new Date()} // 오늘 이전의 날짜 선택 불가능하게 설정
        maxDate={addMonths(new Date(), 1)} // 한 달 후의 날짜 선택 불가능하게 설정
      />
    </div>
      </Column>
    <Column>
    <Text>시간</Text>
    <div className="datepicker" >
      <ReactDatePicker
        ref={datepickerRef}
        shouldCloseOnSelect
        placeholderText="선택하세요"
        id="datepicker2"
        selected={formattedTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        dateFormat="HH:mm"
        onChange={(selectedTime) => handleTimeChange(selectedTime)}
      />
    </div>
    </Column>
    </Schedule>
    </>
  )
}

export default RegisterSchedule

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.dark};
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;

const ClockImg = styled.div`
  margin: 15px;
`;

const Schedule = styled.div`
  display: flex;
  height: 400px;
  margin: 30px 0;
  gap: 20px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Text = styled.div`
  color: ${GreyScale.dark};
  font-size: 16px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;
