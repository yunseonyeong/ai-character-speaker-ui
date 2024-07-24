import Header from "@common/header/Header";
import LayoutDefault from "@common/layout/LayoutDefault";
import Loading from "@common/loading/Loading";
import { GreyScale } from "@utils/constant/color";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { getFavorites } from "src/apis/favorites";
import FavoriteItem from "src/components/favorites/FavoriteItem";
import { styled } from "styled-components";

const Favorites = () => {
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const handleBackBtn = () => {
    router.back();
  };
  
  const [favoritesArray, setFavoritesArray] = useState<any[]>([])

  const getFavoritesArray = async() => {
    setLoading(true)
    const favoritesList = await getFavorites();
    setInterval(()=> {
      setFavoritesArray(favoritesList)
      setLoading(false)
    }, 700)
  }

  useEffect(()=>{
    getFavoritesArray();
  }, [])
  
  return (
    <>
      <Header showMenu={true} showBack={true} back={handleBackBtn} title={'즐겨찾기'} />
      {loading ? <Loading/> :
      <Wrapper>
        <SubTitle>자주 사용하는 목소리는 즐겨찾기로 저장하세요</SubTitle>
        <Container>
          {favoritesArray.map((favorites: any, i: number) => (
            <FavoriteItem getFavoritesArray={getFavoritesArray} key={i} favorites={favorites} showDeleteBtn={true}/>
          ))}
        </Container>
      </Wrapper>
      }
    </>
  )
}

Favorites.getLayout = function getLayout(page: ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Favorites

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
  gap: 20px;
  overflow-y: scroll;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;