import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import Jadu from '@image/jadu.png';
import Loopy from '@image/loopy.png';
import SpongeBob from '@image/spongebob.png';
import zzangu from '@image/zzangu.png';
import { getCharacterName } from "@utils/common-util";
import { BackgroundColor, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import CheckSchedule from "src/components/voicemaking/CheckSchedule";
import CheckVoice from "src/components/voicemaking/CheckVoice";
import Complete from "src/components/voicemaking/Complete";
import RegisterContent from "src/components/voicemaking/RegisterContent";
import RegisterSchedule from "src/components/voicemaking/RegisterSchedule";
import SelectCharacter from "src/components/voicemaking/SelectCharacter";
import useInput from "src/hooks/useInput";
import { styled } from "styled-components";

const VoiceMaking = () => {

  const [step, setStep] = useState(0);
  const characters = [
    {
      type: 'loopy',
      src: Loopy
    },
    {
      type: 'spongebob',
      src: SpongeBob
    },
    {
      type: 'jadu',
      src: Jadu
    },
    {
      type: 'zzangu',
      src: zzangu
    }
  ];
  let today = new Date()
  const [hours, minutes] = '00:00'.split(":").map(Number)
  const dateWithTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [voiceContent, onChangeVoiceContent] = useInput('');
  const [voiceSchedule, setVoiceSchedule] = useState<any>('');
  const router = useRouter();

  const [selectedTime, setSelectedTime] = useState<Date>(dateWithTime);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // 현재 날짜를 디폴트 값으로!  
  const [completeSubtitle, setCompleteSubtitle] = useState('');
  const [completeTitle, setCompleteTitle] = useState('');

  const handleNextBtn = (offset: number) => {
    setStep((prev) => prev + offset);
  };

  const handleBackBtn = () => {
    if (step === 0) router.back();
    if (step === 1 || step === 2) setStep(prev => prev - 1);
    if (step === 3) setStep(1);
    if (step === 4) setStep(2);
  };

  const handlePlayBtn = () => {
    setCompleteTitle('목소리 재생을 요청했어요!');
    setCompleteSubtitle('스피커를 확인하세요');
    handleNextBtn(2);
  };

  const handleScheduleBtn = () => {
    setCompleteTitle('예약이 완료되었어요!');
    setCompleteSubtitle('');
    handleNextBtn(1);
  };

  useEffect(()=>{
    const daykr = ["일", "월", "화", "수", "목", "금", "토"];

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const date = selectedDate.getDate();
    const day = selectedDate.getDay();
    let hours = selectedTime.getHours();
    const minutes = selectedTime.getMinutes();
    const ampm = hours < 12 ? "오전" : "오후";
    hours = hours > 12 ? hours - 12 : hours;
    

    let value = `${year}-${month}-${date} (${daykr[day]}) ${ampm} ${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`

    setVoiceSchedule(value)
  }, [selectedDate, selectedTime])


  return (
    <>

      <Header showBack={step != 5} back={handleBackBtn} title="목소리 만들기" />
      <Wrapper>
        <Container>
          {
            step === 0 && <SelectCharacter characters={characters} setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter} />
          }
          {
            step === 1 && <RegisterContent character={getCharacterName(selectedCharacter.type)} voiceContent={voiceContent} onChangeVoiceContent={onChangeVoiceContent} />
          }
          {
            step === 2 && <RegisterSchedule selectedDate={selectedDate} setSelectedDate={setSelectedDate} selectedTime={selectedTime} setSelectedTime={setSelectedTime}/>
          }
          {
            step === 3 && <CheckVoice voiceContent={voiceContent} character={selectedCharacter}/>
          }
          {
            step === 4 && <CheckSchedule voiceContent={voiceContent} voiceSchedule={voiceSchedule} character={selectedCharacter}/>
          }
          {
            step === 5 && <Complete title={completeTitle} subtitle={completeSubtitle} />
          }
        </Container>
        <BtnWrapper>
          {step === 0 && <Button onClick={() => handleNextBtn(1)}>다음</Button>}
          {step === 1 && <><Button onClick={() => handleNextBtn(2)}>적용</Button><ScheduleBtn onClick={() => handleNextBtn(1)}>예약 설정</ScheduleBtn></>}
          {step === 2 && <Button onClick={() => handleNextBtn(2)}>다음</Button>}
          {step === 3 && <Button onClick={handlePlayBtn}>재생하기</Button>}
          {step === 4 && <Button onClick={handleScheduleBtn}>예약하기</Button>}
          {step === 5 && <Button onClick={() => router.push('/home')}>완료</Button>}
        </BtnWrapper>
      </Wrapper>
    </>
  );
};


VoiceMaking.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default VoiceMaking;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Primary.default};
  flex-basis: 1;
  padding: 20px 0;
  color: ${BackgroundColor};
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

const ScheduleBtn = styled(Button)`
  background-color: #AFD198;
`;