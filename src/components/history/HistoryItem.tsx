
import { getFormattedUnixDateTime, getImgUrl } from "@utils/common-util";
import { GreyScale, Primary } from '@utils/constant/color';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdFavorite } from "react-icons/md";
import { deleteFavoritesById } from "src/apis/favorites";
import styled from 'styled-components';
import FavoritesPopup from '../favorites/FavoritesPopup';
import ConfirmPopup from './ConfirmPopup';

const HistoryItem = ({ getAllHistories, history }: { getAllHistories: any; history: any; }) => {

    const [isMarked, setIsMarked] = useState(false);
    const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const handleFavoriteBtn = () => {
        if (!isMarked) {
            setShowFavoritesPopup(true);
            setShowConfirmPopup(false);
        }
        else {
            setShowFavoritesPopup(false);
            setShowConfirmPopup(true);
        }
    };

    const deleteFavorites = async() => {
        await deleteFavoritesById(history.voice_id, history.favorite.name);
        await getAllHistories()
    }

    useEffect(()=>{
        if(history) {
            setIsMarked(history.favorite.like)
        }
    }, [history])

    return (
        <>
            <Wrapper>
                <StartRow>
                    <DateTime>{getFormattedUnixDateTime(history.updated_at)}</DateTime>
                    <FavoritesBtn onClick={handleFavoriteBtn} isMarked={isMarked} />
                </StartRow>
                <Row>
                    <ImgBox>
                        <Image src={getImgUrl(history.character)} alt="character" width={100} />
                    </ImgBox>
                    <Content>{history.content}</Content>
                </Row>
            </Wrapper>
            {
                showFavoritesPopup && <FavoritesPopup getAllHistories={getAllHistories} setShowFavoritesPopup={setShowFavoritesPopup} voice={history} setIsMarked={setIsMarked} />
            }
            {
                showConfirmPopup && <ConfirmPopup confirm={deleteFavorites} favorites={history} setShowConfirmPopup={setShowConfirmPopup} />
            }
        </>
    );
};

export default HistoryItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    justify-content: space-between;
`;
const Row = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`;

const StartRow = styled(Row)`
    justify-content: space-between;
`;

const DateTime = styled.div`
    font-size: 16px;
`;

const FavoritesBtn = styled(MdFavorite) <{ isMarked: boolean; }>`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${props => props.isMarked ? Primary.default : GreyScale.light};
`;

const ImgBox = styled.div`
    position: relative;
    &.img {
        object-fit: cover;
    }
`;

const Content = styled.div`
    font-size: 16px;
    color: ${GreyScale.dark};
    word-break: break-all;
    white-space: normal;
    padding: 10px;
`;