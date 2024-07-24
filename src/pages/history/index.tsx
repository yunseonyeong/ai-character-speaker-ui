import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import Loading from "@common/loading/Loading";
import { GreyScale } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { getHistories } from "src/apis/history";
import HistoryItem from "src/components/history/HistoryItem";
import { styled } from "styled-components";

const History = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const handleBackBtn = () => {
    router.back();
  };

  const [histories, setHistories] = useState<any[]>([]);

  const getAllHistories = async() => {
    setLoading(true);
    const data = await getHistories();
    setHistories(data)
    setInterval(()=> {
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    getAllHistories()
  }, [])


  return (
    <>
      <Header showMenu={true} showBack={true} back={handleBackBtn} title={'사용 기록'} />
      {loading ? <Loading/> :
      <Wrapper>
        <SubTitle>재생완료된 내용을 확인할 수 있어요</SubTitle>
        <Container>
          {histories.map((history: any, i: number) => (
            <HistoryItem getAllHistories={getAllHistories} key={i} history={history} />
          ))}
        </Container>
      </Wrapper>
      }
    </>
  );
};

History.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default History;

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