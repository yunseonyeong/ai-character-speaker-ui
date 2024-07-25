
import { getAudioContext, getFormattedUnixDateTime, getImgUrl } from "@utils/common-util";
import { GreyScale, Primary } from '@utils/constant/color';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { MdFavorite, MdOutlinePlayCircleFilled } from "react-icons/md";
import { deleteFavoritesById, getVoiceMedia } from "src/apis/favorites";
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

    const requestAudioFile = async(voiceId: string) => {
        const file = await getVoiceMedia(voiceId)
        if (file) {
            const audioContext = getAudioContext();
            const audioBuffer = await audioContext.decodeAudioData(file);
            const source = audioContext.createBufferSource();
            source.buffer = audioBuffer;
            source.connect(audioContext.destination)
            source.start();
        }
      }

    return (
        <>
            <Wrapper>
                <StartRow>
                    <DateTime>{getFormattedUnixDateTime(history.updated_at)}</DateTime>
                    <BtnDom>
                    <PlayBtn onClick={()=>requestAudioFile(history.voice_id)}/>
                    <FavoritesBtn onClick={handleFavoriteBtn} isMarked={isMarked} />
                    </BtnDom>
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

const PlayBtn = styled(MdOutlinePlayCircleFilled)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${Primary.default};
    border-radius: 20px;
    &:hover {
        box-shadow: 3px 3px 3px 3px #d4d4d4;
    }
`;

const BtnDom = styled.div`
    display: flex;
    gap:  10px;
`;