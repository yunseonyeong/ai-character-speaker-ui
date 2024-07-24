import Header from "@common/header/Header";
import Loading from "@common/loading/Loading";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getDevice, updateDeviceName } from "src/apis/device";
import useInput from "src/hooks/useInput";
import { styled } from "styled-components";

const Device = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false)
    const handleBackBtn = () => {
      router.back();
    };
    const [nameValue, onChangeNameValue, setNameValue] = useInput('')

    const getDeviceStatus = async() => {
        const deviceName = await getDevice()
        setNameValue(deviceName)
      }

    useEffect(()=>{
        setLoading(true)
        getDeviceStatus()
        setTimeout(()=>{
            setLoading(false)
        }, 500)
    }, [])

    function changeDeviceName() {
        updateDeviceName(nameValue)
        router.back()
    }

  return (
    <>
      <Header showMenu={true} showBack={true} back={handleBackBtn} title={'디바이스'} />
      {loading ? <Loading/> : 
      <Wrapper>
        <SubTitle>스피커 연결 상태를 관리해요</SubTitle>
        <Container>
                <Row><Title>스피커 이름</Title><NameInput value={nameValue} onChange={onChangeNameValue}/></Row>
                <ButtonWrapper>
                    <Button onClick={changeDeviceName}>이름 변경</Button>
                </ButtonWrapper>
        </Container>
      </Wrapper>
        }
    </>
  )
}

export default Device

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
  gap: 30px;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    height: auto;
    align-items: center;
`;

const Title = styled.div`
    width: 100px;
    font-size: 16px;
`;

const NameInput = styled.input`
    font-size: 18px;
    border-radius: 8px;
    outline: none;
    border: 1px solid ${GreyScale.dark};
    height: 40px;
`;

const ButtonWrapper = styled(Row)`
    justify-content: center;
`;

const Button = styled.div`
    background-color: ${Primary.default};
    font-size: 16px;
    color: ${BackgroundColor};
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    border-radius: 16px;
    cursor: pointer;
`;