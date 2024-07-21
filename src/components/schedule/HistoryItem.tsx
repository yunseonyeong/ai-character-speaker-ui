import Jadu from '@image/jadu.png';
import Jjangu from '@image/jjangu.png';
import Loopy from '@image/loopy.png';
import Spongebob from '@image/spongebob.png';
import { getFormattedUnixDateTime } from "@utils/common-util";
import { BackgroundColor, GreyScale, Primary } from '@utils/constant/color';
import Image from 'next/image';
import styled from 'styled-components';
import { MdFavorite } from "react-icons/md";
import { useState } from 'react';
import FavoritesPopup from './FavoritesPopup';
import ConfirmPopup from './ConfirmPopup';

const HistoryItem = ({ schedule }: { schedule: any; }) => {

    const [isMarked, setIsMarked] = useState(schedule.isMarked ?? false);
    const [showFavoritesPopup, setShowFavoritesPopup] = useState(false);
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);

    const getImgUrl = (character: string) => {
        switch (character) {
            case 'loopy':
                return Loopy;
            case 'spongebob':
                return Spongebob;
            case 'jadu':
                return Jadu;
            case 'jjangu':
                return Jjangu;
            default:
                return Loopy;
        }
    };

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
                    <DateTime>{getFormattedUnixDateTime(schedule.played_time)}</DateTime>
                    <FavoritesBtn onClick={handleFavoriteBtn} isMarked={isMarked} />
                </StartRow>
                <Row>
                    <ImgBox>
                        <Image src={getImgUrl(schedule.character)} alt="character" width={100} />
                    </ImgBox>
                    <Content>{schedule.content}</Content>
                </Row>
            </Wrapper>
            {
                showFavoritesPopup && <FavoritesPopup setShowFavoritesPopup={setShowFavoritesPopup} schedule={schedule} setIsMarked={setIsMarked} />
            }
            {
                showConfirmPopup && <ConfirmPopup schedule={schedule} setIsMarked={setIsMarked} setShowConfirmPopup={setShowConfirmPopup} />
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