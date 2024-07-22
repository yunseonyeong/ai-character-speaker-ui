import { getImgUrl } from "@utils/common-util";
import { GreyScale, Primary } from "@utils/constant/color";
import Image from "next/image";
import { useState } from "react";
import { MdDeleteForever, MdOutlinePlayCircleFilled } from "react-icons/md";
import { styled } from "styled-components";
import ConfirmPopup from "../history/ConfirmPopup";
import VoiceDetailPopup from "./VoiceDetailPopup";

const FavoriteItem = ({favorites, showDeleteBtn}: {favorites: any, showDeleteBtn: boolean}) => {
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const handleDeleteBtn = () => {
        setShowConfirmPopup(true);
    }
    const [showDetailPopup, setShowDetailPopup] = useState(false);

    return (
        <>
        <Wrapper>
            <Row>
                <ImgBox>
                    <Image src={getImgUrl(favorites.character)} alt="character" width={100} />
                </ImgBox>
                <Name onClick={()=>setShowDetailPopup(true)}>{favorites.name}</Name>
                <PlayBtn/>
                {showDeleteBtn && <DeleteBtn onClick={handleDeleteBtn}/>}
            </Row>
        </Wrapper>
        
        {
            showConfirmPopup && <ConfirmPopup favorites={favorites} setShowConfirmPopup={setShowConfirmPopup} />
        }
        {
            showDetailPopup && <VoiceDetailPopup voice={favorites} setShowDetailPopup={setShowDetailPopup}/>
        }
    </>
  )
}

export default FavoriteItem

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Row = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
    border-radius: 16px;
    border: 1.5px solid #BBBBBB;
    padding: 0 15px;
`;


const ImgBox = styled.div`
    position: relative;
    &.img {
        object-fit: cover;
    }
`;

const Name = styled.div`
    font-size: 16px;
    color: ${GreyScale.dark};
    word-break: break-all;
    white-space: normal;
    padding: 10px;
    min-width: 150px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const PlayBtn = styled(MdOutlinePlayCircleFilled)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${Primary.default};
`;

const DeleteBtn = styled(MdDeleteForever)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${Primary.default};
`;