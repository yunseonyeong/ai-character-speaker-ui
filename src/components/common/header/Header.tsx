import SideBar from "@common/menu/SideBar";
import Logo from '@image/logo.png';
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { styled } from "styled-components";


const Header = ({back, showBack, title, showMenu}: {back?: ()=>void; showBack: boolean; title?: string; showMenu?: boolean;}) => {

  const router = useRouter()
  const [showSideBar, setShowSideBar] = useState(false)
  
  return (
    <>
    {showSideBar ?
    <SideBar setShowSideBar={setShowSideBar}/> :
      <Container>
        <SubContainer>
          <HeaderLeft>{showBack ? <BackBtn size={30} onClick={back} /> : <LogoDom onClick={()=>router.push('/home')}><Image width={45} height={45} src={Logo} alt="logo" /></LogoDom>}</HeaderLeft>
          <HeaderCenter>{title && title}</HeaderCenter>
          <HeaderRight>{showMenu && <MenuIcon onClick={()=>setShowSideBar(true)}/> }</HeaderRight>
        </SubContainer>
      </Container>
    }
    </>
  )
}

export default Header


const Container = styled.div`
  @media (min-width: 428px) {
    max-width: 428px;
    width: 100%;
  }
  top: 0px;
  z-index: 6;
  height: 51px;
  justify-content: center;
  display: flex;
  position: sticky;
  align-items: center;
  flex-direction: column;
  padding: 15px 0;
`;

const SubContainer = styled.div`
  background-color: ${BackgroundColor};
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
    width: 20%;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: flex-start;
    justify-content: space-between;
`;

const HeaderCenter = styled.div`
    width: 50%;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    color: ${GreyScale.dark};
    font-size: 20px;
    font-weight: bold;
`;

const HeaderRight = styled.div`
    width: 20%;
    display: flex;
    cursor: pointer;
    position: relative;
    align-items: center;
    justify-content: flex-end;
`;

const BackBtn = styled(MdOutlineKeyboardBackspace)`
  color: ${Primary.default};
`

const MenuIcon = styled(CgMenu)`
  width: 30px;
  height: 30px;
  color: ${Primary.default};
`;

const LogoDom = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;