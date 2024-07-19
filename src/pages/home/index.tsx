import LayoutDefault from "@common/layout/LayoutDefault"
import { ReactElement } from "react"
import { styled } from "styled-components"

const Home = () => {
  return (
    <Wrapper>
      <Container></Container>
      <BtnWrapper>


      </BtnWrapper>
    </Wrapper>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <LayoutDefault>{page}</LayoutDefault>
}

export default Home

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
  background-color: aliceblue;
`;

const BtnWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: antiquewhite;

`;