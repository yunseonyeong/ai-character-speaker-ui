import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import Loading from "@common/loading/Loading";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { getDevice } from "src/apis/device";
import { getFavorites } from "src/apis/favorites";
import DeviceStatus from "src/components/device/DeviceStatus";
import FavoriteItem from "src/components/favorites/FavoriteItem";
import { styled } from "styled-components";

const Home = () => {
  const [deviceName, setDeviceName] = useState('')
  const [favoritesArray, setFavoritesArray] = useState<any[]>([])
  const [loading, setLoading] = useState(false);

  const getFavoritesArray = async() => {
    setLoading(true)
    let favoritesList = await getFavorites();
    if (favoritesList.length > 4) {
      favoritesList = favoritesList.slice(0,4)
    }
    setTimeout(()=> {
      setFavoritesArray(favoritesList)
      setLoading(false)
    }, 400)
    
  }

  useEffect(()=>{
    getFavoritesArray();
    getDeviceStatus();

  }, [])

  const getDeviceStatus = async() => {
    const deviceName = await getDevice()
    setDeviceName(deviceName)
  }

  const router = useRouter();

  return (
    <>
      <Header showMenu={true} showBack={false} title={''} />
      {
        loading ? <Loading/>
      :
      <Wrapper>
        <Container>
          <TitleRow>디바이스</TitleRow>
          <DeviceStatus name={deviceName}/>
          <TitleRow>즐겨찾는 
            <MoreBtn onClick={()=>router.push('/favorites')}>more<Arrow/></MoreBtn>
          </TitleRow>
          <FavoritesDom>
          {
            favoritesArray && favoritesArray.map((favorites: any, i:number) => (
              <FavoriteItem getFavoritesArray={getFavoritesArray}  key={i}favorites={favorites} showDeleteBtn={false}/>
            ))
          }
          </FavoritesDom>
        </Container>
        <BtnWrapper>
          <Button onClick={()=>router.push('/voicemaking')}>목소리 만들기</Button>
        </BtnWrapper>
      </Wrapper>
}
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
    justify-content: space-between;
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

const MoreBtn = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border: 1px solid ${GreyScale.default};
  border-radius: 20px;
  padding : 5px 7px;
  justify-content: center;
  margin-right: 5px;
  &:hover {
    box-shadow: 1px 1px 1px 1px #d4d4d4;
  }
`;

const Arrow = styled(IoIosArrowForward)`
  margin-top: 4px;
`