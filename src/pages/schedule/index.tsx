import Header from "@common/header/Header";
import Loading from "@common/loading/Loading";
import { GreyScale } from "@utils/constant/color";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAllSchedules } from "src/apis/schedule";
import ScheduleItem from "src/components/schedule/ScheduleItem";
import { styled } from "styled-components";

const Schedule = () => {
  const [loading, setLoading] = useState(false);

const router = useRouter();
const handleBackBtn = () => {
    router.back();
};

const [schedules, setScheduels] = useState<any[]>([]);

const getSchedules = async() => {
  setLoading(true);
  const data = await getAllSchedules();
  setScheduels(data)
  setTimeout(()=>{
    setLoading(false)
  }, 700)
}

  useEffect(() => {
    getSchedules()
  }, [])

  return (
    <>
      <Header showBack={true} back={handleBackBtn} title={'예약관리'} showMenu={true} />
      {loading ? <Loading/> : 
      <Wrapper>
        <SubTitle>목소리를 원하는 시간에 재생되도록 예약할 수 있어요</SubTitle>
        <Container>
          {schedules.length > 0 && schedules.map((schedule: any, i: number) => (
            <ScheduleItem getSchedules={getSchedules} key={i} schedule={schedule} />
          ))}
        </Container>
      </Wrapper>
      }
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

function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}
