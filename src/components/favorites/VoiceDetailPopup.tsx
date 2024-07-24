import { getCharacterName } from "@utils/common-util";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";

interface VoiceDetailPopupProps {
    setShowDetailPopup: Dispatch<SetStateAction<boolean>>;
    voice: any;
}

const VoiceDetailPopup = ({setShowDetailPopup, voice}: VoiceDetailPopupProps) => {
    
    return (
        <ModalWrapper>
        <Wrapper>
            <Header>목소리 상세정보</Header>
            <Content>
                <Row><Title>캐릭터</Title><Name>{getCharacterName(voice.character)}</Name></Row>
                <Row><Title>제목</Title><Name>{voice.favorite.name}</Name></Row>
                <Row><Title>내용</Title><Name>{voice.content}</Name></Row>
            </Content>
            <ButtonWrapper>
                <Button onClick={() => setShowDetailPopup(false)}>닫기</Button>
            </ButtonWrapper>
        </Wrapper>
    </ModalWrapper>
  )
}

export default VoiceDetailPopup

const ModalWrapper = styled.div`
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
    background: white;
    border-radius : 1rem;
    padding: 2rem;
    color: black;
    z-index: 1000;
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    padding: 30px 0; 
    align-items: center;
    font-size: 16px;
    color: ${GreyScale.dark};
    display: flex;
    flex-direction: column;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    background-color: ${Primary.default};
    flex-basis: 1;
    padding: 10px 0;
    color: ${BackgroundColor};
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
`;

const Name = styled.div`
    font-size: 16px;
    max-width: calc(100% - 100px);
`;

const Title = styled.div`
    width: 80px;
    font-size: 18px;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    height: auto;
`;