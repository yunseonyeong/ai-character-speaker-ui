import { getCharacterName } from "@utils/common-util";
import { GreyScale } from "@utils/constant/color";
import Image from "next/image";
import { styled } from "styled-components";

const CheckVoice = ({voiceContent, character}: {voiceContent: string; character: any}) => {
  return (
    <>
    <Title>목소리 정보를 확인해주세요</Title>
    <SubTitle>스피커를 통해 아래 내용이 재생돼요</SubTitle>
    <Background>
      <Character>
        <ImgBox>
          <Image src={character.src} alt="character"/>
        </ImgBox>
        <Name>{getCharacterName(character.type)}</Name>
      </Character>
      <Row>
      <Content>
        {voiceContent}
      </Content>
      </Row>
    </Background>
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

const Background = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Name = styled.div`
  color: ${GreyScale.dark};
  font-size: 20px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;


const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 16px;
  border: 1px solid ${GreyScale.dark};
  padding: 10px;
  min-height: 200px;
  width: 90%;
  margin-top: 10px;
  font-size: 16px;
  color: ${GreyScale.dark};
`;

const ImgBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70%;
    height: 70%;
    object-fit: cover;
  }
`;

const Character = styled.div`
  width: 100%;
`;