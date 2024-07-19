import { GreyScale } from "@utils/constant/color";
import { styled } from "styled-components";

const CheckVoice = () => {
  return (
    <>
    <Title>목소리 정보를 확인해주세요</Title>
    <SubTitle>스피커를 통해 아래 내용이 재생돼요</SubTitle>
    </>
  )
}

export default CheckVoice

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
