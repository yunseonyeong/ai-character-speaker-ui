import clock from '@image/clock.png';
import { GreyScale } from "@utils/constant/color";
import { addMonths } from "date-fns";
import Image from "next/image";
import { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from "styled-components";


const RegisterSchedule = (props: any) => {
  const datepickerRef = useRef(null);
  const locale = new Date().toLocaleString('en-US', { timeZone: 'Asia/Seoul' });
  
  const handleTimeChange = (selectedTime: any) => {
    const hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const fTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

    const timeStringToDate = (timeString: string): Date => {
      const today = new Date();
      const [hours, minutes] = timeString.split(':').map(Number);
      const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes);
      return dateWithTime;
    };
    const st = timeStringToDate(fTime); 
    props.setSelectedTime(st)
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
        selected={props.selectedDate} 
        onChange={(date) => props.setSelectedDate(date as Date)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 1)} 
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
        selected={props.selectedTime}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
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
