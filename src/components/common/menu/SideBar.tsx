import Header from "@common/header/Header";
import { BackgroundColor, GreyScale } from "@utils/constant/color";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { MdFavorite } from 'react-icons/md';
import { getDevice } from "src/apis/device";
import DeviceStatus from "src/components/device/DeviceStatus";

import { styled } from "styled-components";

interface SideBarProps {
    setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

const SideBar = ({setShowSideBar}: SideBarProps) => {
  const [deviceName, setDeviceName] = useState('')
    const handleBackBtn = () => {
      setShowSideBar(false)
    };

    const getDeviceStatus = async() => {
      const deviceName = await getDevice()
      setDeviceName(deviceName)
    }

    useEffect(()=>{
      getDeviceStatus();
    }, [])
  
  return (
    <>
    <Wrapper>
        <Header showBack={true} back={handleBackBtn} title='메뉴'/>
        <Container>
            <TitleRow>디바이스</TitleRow>
            <DeviceStatus name={deviceName}/>
            <TitleRow>메뉴</TitleRow>
            <MenuDom>
                <MenuRow href={'/favorites'}><MdFavorite size={25}/>즐겨찾기</MenuRow>
                <MenuRow href={'/schedule'}><AiOutlineSchedule size={25}/>예약관리</MenuRow>
                <MenuRow href={'/history'}><LuHistory size={25}/>사용기록</MenuRow>
            </MenuDom>
        </Container>
    </Wrapper>
    </>
  )
}

export default SideBar

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  right: 0;
  z-index: 5;
  background-color: ${BackgroundColor};
  flex-direction: column;
  align-items: center;
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
`;

const TitleRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 20px;
    color: ${GreyScale.dark};
    font-weight: bold;    
    width: 100%;
`;

const MenuDom = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 85%;
`;

const MenuRow = styled(Link)`
    display: flex;
    width: 100%;
    font-size: 16px;
    color: ${GreyScale.dark};
    font-weight: 700;
    padding: 20px;
    cursor: pointer;
    gap: 10px;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;