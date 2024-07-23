import Header from "@common/header/Header";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { useState } from "react";
import useInput from "src/hooks/useInput";
import { styled } from "styled-components";

const Device = () => {
    const router = useRouter();
    const handleBackBtn = () => {
      router.back();
    };
    const device_status = {
        is_connected: false,
        name: "토미의 스피커",
        ip_address: '255.255.255.255'
    }
    const [ipAddress, setIpAddress] = useState(device_status.ip_address.split('.'))
    const [name, onChangeName] = useInput(device_status.name)
    const handleChangeIpAdress = (idx: number, e: any) => {
        let copy = [...ipAddress]
        copy[idx] = e.target.value;
        setIpAddress(copy)
    }
  return (
    <>
      <Header showBack={true} back={handleBackBtn} title={'디바이스'} />
      <Wrapper>
        <SubTitle>스피커 연결 상태를 관리해요</SubTitle>
        <Container>
                {/* <Row><Title>연결 상태</Title><Status is_connected={device_status.is_connected ?? false}>{device_status.is_connected ? '연결됨' : '연결 안됨'}</Status>
                </Row> */}
                <Row><Title>스피커 이름</Title><NameInput value={name} onChange={onChangeName}/></Row>
                {/* <Row>
                    <Title>IP 주소</Title>
                    <IpRow>
                    <IpInput 
                        value={ipAddress[0]} 
                        onChange={(e: any) => handleChangeIpAdress(0, e)}
                    />.
                    <IpInput 
                        value={ipAddress[1]} 
                        onChange={(e: any) => handleChangeIpAdress(1, e)}
                    />.
                    <IpInput 
                        value={ipAddress[2]}
                        onChange={(e: any) => handleChangeIpAdress(2,e)}
                    />.
                    <IpInput 
                        value={ipAddress[3]}
                        onChange={(e: any) => handleChangeIpAdress(3,e)}
                    />
                    </IpRow>
                </Row> */}
                <ButtonWrapper>
                    <Button>이름 변경</Button>
                </ButtonWrapper>
        </Container>
      </Wrapper>
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

const IpRow = styled.div`
    display: flex;
    gap: 10px;
    align-items: flex-end;
    font-weight: 800;
    font-size: 16px;
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

const IpInput = styled(NameInput)`
    width: 50px;
    height: 30px;
`;

const Status = styled.div<{is_connected: boolean}>`
    color: ${BackgroundColor};
    background-color: ${props => props.is_connected ? Primary.default : GreyScale.dark };
    font-size: 13px;
    font-weight: normal;
    padding: 5px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    border-radius: 29px;
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