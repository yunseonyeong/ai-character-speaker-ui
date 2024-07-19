import complete from '@image/complete.png';
import { GreyScale } from '@utils/constant/color';
import Image from 'next/image';
import { styled } from 'styled-components';

const Complete = ({title, subtitle}: {title: string, subtitle: string}) => {
  return (
    <>
    <CompleteImage>
      <Image src={complete} alt="check" />
    </CompleteImage>
    <Title>{title}</Title>
    <SubTitle>{subtitle}</SubTitle>
    </>
  )
}

export default Complete

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.dark};
  font-size: 24px;
  font-weight: bold;
`;

const CompleteImage = styled.div`
  margin: 15px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;