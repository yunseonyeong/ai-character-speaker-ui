import { GreyScale } from "@utils/constant/color";
import { styled } from "styled-components";

interface RegisterContentProps {
  character: any;
  voiceContent: string;
  onChangeVoiceContent: (e: any) => void;
}

const RegisterContent = ({ character, voiceContent, onChangeVoiceContent }: RegisterContentProps) => {

  return (
    <>
      <Title>목소리 내용을 입력하세요</Title>
      <SubTitle>{character} 목소리로 아래 내용을 재생해요</SubTitle>
      <ContentInput value={voiceContent} onChange={onChangeVoiceContent} placeholder="내용을 입력하세요" />
    </>
  );
};

export default RegisterContent;

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

const ContentInput = styled.input`
  width: 100%;
  height: 300px;
  margin: 30px 0;
  font-size: 18px;
  border-radius: 10px;
  border: 1px solid ${GreyScale.default};
  color: ${GreyScale.dark};
  padding: 10px;
  outline: none;
`;