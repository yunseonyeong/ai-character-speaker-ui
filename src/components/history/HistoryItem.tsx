
import { getFormattedUnixDateTime, getImgUrl } from "@utils/common-util";
import { GreyScale, Primary } from '@utils/constant/color';
import Image from 'next/image';
import { useState } from 'react';
import { MdFavorite } from "react-icons/md";
import styled from 'styled-components';
import FavoritesPopup from '../favorites/FavoritesPopup';
import ConfirmPopup from './ConfirmPopup';

const HistoryItem = ({ history }: { history: any; }) => {

    const [isMarked, setIsMarked] = useState(history.isMarked ?? false);
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

    return (
        <>
            <Wrapper>
                <StartRow>
                    <DateTime>{getFormattedUnixDateTime(history.played_time)}</DateTime>
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
                showFavoritesPopup && <FavoritesPopup setShowFavoritesPopup={setShowFavoritesPopup} voice={history} setIsMarked={setIsMarked} />
            }
            {
                showConfirmPopup && <ConfirmPopup favorites={history} setShowConfirmPopup={setShowConfirmPopup} />
            }
        </>
    );
};

export default HistoryItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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