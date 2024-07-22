import Header from "@common/header/Header";
import { GreyScale } from "@utils/constant/color";
import { useRouter } from "next/router";
import ScheduleItem from "src/components/schedule/ScheduleItem";
import { styled } from "styled-components";

const Schedule = () => {

const router = useRouter();
const handleBackBtn = () => {
    router.back();
};

const schedules = [
    {
    scheduled_time: 1721383038,
    voice_id: 'loopy1',
    content: '안녕 우리 밥먹어야지? 밥먹자 밥먹자 안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자',
    character: 'loopy', 
  },{
    scheduled_time: 1721383038,
    voice_id: 'loopy1',
    content: '안녕 우리 밥먹어야지? 밥먹자 밥먹자 안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자안녕 우리 밥먹어야지? 밥먹자 밥먹자',
    character: 'loopy',
  },
  {
    scheduled_time: 1721383038,
    voice_id: 'loopy1',
    character: 'loopy', 
    content: '안녕 우리 밥먹어야지? 밥먹자 밥먹자',
  },
  {
    scheduled_time: 1721383038,
    voice_id: 'loopy1',
    character: 'loopy', 
    content: '안녕 우리 밥먹어야지? 밥먹자 밥먹자',
  }];

  return (
    <>
      <Header showBack={true} back={handleBackBtn} title={'예약관리'} />
      <Wrapper>
        <SubTitle>목소리를 원하는 시간에 재생되도록 예약할 수 있어요</SubTitle>
        <Container>
          {schedules.map((schedule: any, i: number) => (
            <ScheduleItem key={i} schedule={schedule} />
          ))}
        </Container>
      </Wrapper>
    </>
  )
}

export default Schedule

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 50px;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
  gap: 20px;
  overflow-y: scroll;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;