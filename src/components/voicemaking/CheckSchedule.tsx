import { GreyScale } from "@utils/constant/color";
import { styled } from "styled-components";

const CheckSchedule = () => {
  return (
    <>
      <Title>예약 내용을 확인해주세요</Title>
      <SubTitle>아래 내용이 예약한 시간에 재생돼요</SubTitle>
    </>
  );
};

export default CheckSchedule;

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
