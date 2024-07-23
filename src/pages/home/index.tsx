import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { getFavorites } from "src/apis/favorites";
import DeviceStatus from "src/components/device/DeviceStatus";
import FavoriteItem from "src/components/favorites/FavoriteItem";
import { styled } from "styled-components";

const Home = () => {

  const [favoritesArray, setFavoritesArray] = useState<any[]>([])

  const getFavoritesArray = async() => {
    let favoritesList = await getFavorites();
    if (favoritesList.length > 4) {
      favoritesList = favoritesList.slice(0,4)
    }
    setFavoritesArray(favoritesList)
  }

  useEffect(()=>{
    getFavoritesArray();
  }, [])
  
  const router = useRouter();

  return (
    <>
      <Header showBack={false} title={''} showMenu={true}/>
      <Wrapper>
        <Container>
          <TitleRow>디바이스</TitleRow>
          <DeviceStatus/>
          <TitleRow>즐겨찾는</TitleRow>
          <FavoritesDom>
          {
            favoritesArray && favoritesArray.map((favorites: any, i:number) => (
              <FavoriteItem key={i}favorites={favorites} showDeleteBtn={false}/>
            ))
          }
          </FavoritesDom>
        </Container>
        <BtnWrapper>
          <Button onClick={()=>router.push('/voicemaking')}>목소리 만들기</Button>
        </BtnWrapper>
      </Wrapper>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <LayoutDefault>{page}</LayoutDefault>
}

export default Home

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
  gap: 30px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;
`;

const BtnWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
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

const Button = styled.div`
  width: 90%;
  background-color: ${Primary.default};
  color: ${BackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 65px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

const FavoritesDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  align-items: center;
  width: 100%;
  gap: 20px;
`;