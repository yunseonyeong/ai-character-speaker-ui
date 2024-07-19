import Header from "@common/header/Header"
import LayoutDefault from "@common/layout/LayoutDefault"
import { GreyScale } from "@utils/constant/color"
import { useRouter } from "next/router"
import { ReactElement } from "react"
import ScheduleItem from "src/components/schedule/ScheduleItem"
import { styled } from "styled-components"

const Schedule = () => {
  const router = useRouter();
  const handleBackBtn = () => {
    router.back()
  }
  const schedules = [{
    played_time: 1721383038,
    character: 'loopy',
    content: '루피야 이제 밥 먹을 시간이야. 밥 먹고 또 놀자. 밥 맛있게 먹어~'
  },
  {
    played_time: 1721383038,
    character: 'loopy',
    content: '루피야 이제 밥 먹을 시간이야. 밥 먹고 또 놀자. 밥 맛있게 먹어~'
  },
  {
    played_time: 1721383038,
    character: 'loopy',
    content: '루피야 이제 밥 먹을 시간이야. 밥 먹고 또 놀자. 밥 맛있게 먹어~'
  },
  {
    played_time: 1721383038,
    character: 'loopy',
    content: '루피야 이제 밥 먹을 시간이야. 밥 먹고 또 놀자. 밥 맛있게 먹어~'
  }]
  return (
    <>
        <Header showBack={true} back={handleBackBtn} title={'사용 기록'}/>
        <Wrapper>
          <SubTitle>재생완료된 내용을 확인할 수 있어요</SubTitle>
          <Container>
            {schedules.map((schedule: any, i: number) => (
              <ScheduleItem key={i} schedule={schedule}/>
            ))}
          </Container>
        </Wrapper>
    </>
  )
}

Schedule.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>
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
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;