import { BackgroundColor, Basic, GreyScale, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { RiSpeaker2Fill } from "react-icons/ri";
import styled from "styled-components";

const DeviceStatus = () => {
    const router = useRouter()
    const device = {
        device_name: "타요의 스피커",
        is_connected: false
    }
  return (
    <Wrapper onClick={()=>router.push('/device')}>
        <Speaker>
        <SpeakerIcon/>
        </Speaker>
        <Title>{device.device_name}</Title>
        <Status>이름 변경</Status>
    </Wrapper>
  )
}

export default DeviceStatus

const Wrapper = styled.div`
    height: 87px;
    width: 90%;
    background-color: ${GreyScale.light};
    border-radius: 10px;
    margin: 20px 0;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    justify-content: space-between;
    box-shadow: 0px 3px 6px #adadad;

`;

const SpeakerIcon = styled(RiSpeaker2Fill)`
    width: 60px;
    height: 60px;
    color: ${Primary.default};
    margin: 10px;
`;

const Title = styled.div`
    color: ${Basic.default};
    font-size: 18px;
    font-weight: 700;
    width: 80%;
    margin: 20px;
`;

const Speaker = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background-color: ${BackgroundColor};
    width: 70px;
    height: 70px;
`;

const Status = styled.div`
    color: ${BackgroundColor};
    background-color: ${Primary.default};
    font-size: 13px;
    font-weight: 700;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    border-radius: 29px;
    cursor: pointer;
    &:hover {
        box-shadow: 0px 6px 9px #adadad;
    }
`;