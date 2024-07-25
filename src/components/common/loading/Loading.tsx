import spinner from '@image/loading.gif';
import { GreyScale } from '@utils/constant/color';
import Image from 'next/image';
import styled from 'styled-components';

const Loading = ({voiceMaking}: {voiceMaking?: boolean}) => {
  return (

    <LoadingSpinner>
      <Wrapper>
        {voiceMaking && <Voice>
          <Row>
          목소리 생성 중이에요
          </Row>
          <Row>
            조금만 기다려 주세요
          </Row>
          </Voice>}
        <Image  src={spinner} alt="loading"></Image>
      </Wrapper>  
    </LoadingSpinner>
  )
}

export default Loading

const LoadingSpinner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border-radius : 1rem;
    padding: 2rem;
    color: black;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Row = styled.div`
  display: flex;
  font-weight: 700;
  color: ${GreyScale.dark};
`;

const Voice = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  background-color: white;
  border-radius: 10px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;
`;