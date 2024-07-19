import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import Jadu from '@image/jadu.png';
import Jjangu from '@image/jjangu.png';
import Loopy from '@image/loopy.png';
import SpongeBob from '@image/spongebob.png';
import { BackgroundColor, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import CheckSchedule from "src/components/voicemaking/CheckSchedule";
import CheckVoice from "src/components/voicemaking/CheckVoice";
import Complete from "src/components/voicemaking/Complete";
import RegisterContent from "src/components/voicemaking/RegisterContent";
import RegisterSchedule from "src/components/voicemaking/RegisterSchedule";
import SelectCharacter from "src/components/voicemaking/SelectCharacter";
import useInput from "src/hooks/useInput";
import { styled } from "styled-components";

const VoiceMaking = () => {

  const [step, setStep] = useState(0)
  const characters = [
    {
      type: 'loopy',
      name: '루피',
      src: Loopy
    },
    {
      type: 'spongebob',
      name: '스폰지밥',
      src: SpongeBob
    },
    {
      type: 'jadu',
      name: '자두',
      src: Jadu
    },
    {
      type: 'jjangu',
      name: '짱구',
      src: Jjangu
    }
  ];
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  const [voiceContent, onChangeVoiceContent] = useInput('');
  const [voiceSchedule, setVoiceSchedule] = useState();
  const router = useRouter();
  
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // 현재 날짜를 디폴트 값으로!  
  const [selectedTime, setSelectedTime] = useState<any>();
  const [completeSubtitle, setCompleteSubtitle] = useState('')
  const [completeTitle, setCompleteTitle] = useState('')
  const handleNextBtn = (offset: number) => {
    setStep((prev) => prev + offset)
  }

  const handleBackBtn = () => {
    if (step === 0) router.back() ;
    if (step === 1 || step === 2) setStep(prev => prev - 1);
    if (step === 3) setStep(1)
    if (step === 4) setStep(2)
  }

  const handlePlayBtn = () => {
    setCompleteTitle('목소리 재생을 요청했어요!')
    setCompleteSubtitle('스피커를 확인하세요')
    handleNextBtn(2)
  }
  
  const handleScheduleBtn = () => {
    setCompleteTitle('예약이 완료되었어요!')
    setCompleteSubtitle('')
    handleNextBtn(1)
  }
  

  return (
    <>
    
    <Header showBack={step != 5} back={handleBackBtn}/>
    <Wrapper>
        <Container>
          {
            step === 0 && <SelectCharacter characters={characters} setSelectedCharacter={setSelectedCharacter} selectedCharacter={selectedCharacter}/>
          }   
          {
            step === 1 && <RegisterContent character={selectedCharacter.name} voiceContent={voiceContent} onChangeVoiceContent={onChangeVoiceContent}/>
          }
          {
            step === 2 && <RegisterSchedule selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
          }
          {
            step === 3 && <CheckVoice/>
          }
          {
            step === 4 && <CheckSchedule/>
          }
          {
            step === 5 && <Complete title={completeTitle} subtitle={completeSubtitle}/>
          }
        </Container>
        <BtnWrapper>
        {step === 0 && <Button onClick={()=>handleNextBtn(1)}>다음</Button>}
        {step === 1 && <><Button onClick={()=>handleNextBtn(2)}>적용</Button><ScheduleBtn onClick={()=>handleNextBtn(1)}>예약 설정</ScheduleBtn></>}
        {step === 2 && <Button onClick={()=>handleNextBtn(2)}>다음</Button>}
        {step === 3 && <Button onClick={handlePlayBtn}>재생하기</Button>}
        {step === 4 && <Button onClick={handleScheduleBtn}>예약하기</Button>}
        {step === 5 && <Button onClick={()=>router.push('/home')}>완료</Button>}
        </BtnWrapper>
      </Wrapper>  
      </>
  )
}


VoiceMaking.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>
}

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
`