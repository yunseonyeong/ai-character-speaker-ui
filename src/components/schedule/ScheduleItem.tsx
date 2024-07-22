import { getCharacterName, getFormattedUnixDateTime, getImgUrl } from "@utils/common-util";
import { GreyScale, Primary } from "@utils/constant/color";
import Image from "next/image";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { styled } from "styled-components";
import DeleteSchedulePopup from "./DeleteSchedulePopup";

const ScheduleItem = ({schedule}: {schedule: any}) => {
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const handleDeleteBtn = () => {
        setShowConfirmPopup(true);
    }
  return (
    <>
        <Wrapper>
            <Content>
                <SubRow>
                    <Row>
                    <ImgBox>
                        <Image src={getImgUrl(schedule.character)} alt="character" width={100} />
                    </ImgBox>
                    <Name>{getCharacterName(schedule.character)}</Name>
                    <DeleteBtn onClick={handleDeleteBtn}/>
                    </Row>
                </SubRow>
                <SubRow><Title>예약 시간</Title><Name>{getFormattedUnixDateTime(schedule.scheduled_time)}</Name></SubRow>
                <SubRow><Title>목소리 내용</Title><Name>{schedule.content}</Name></SubRow>
                </Content>
        </Wrapper>
        
        {
            showConfirmPopup && <DeleteSchedulePopup schedule={schedule} setShowConfirmPopup={setShowConfirmPopup} />
        }
    </>
  )
}

export default ScheduleItem


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    padding: 30px 0; 
    align-items: center;
    font-size: 16px;
    color: ${GreyScale.dark};
    display: flex;
    flex-direction: column;
    border: 1.5px solid #BBBBBB;
    padding: 0 15px 15px 15px;
    border-radius: 16px;
`;

const ImgBox = styled.div`
    position: relative;
    &.img {
        object-fit: cover;
    }
`;

const Title = styled.div`
    width: 80px;
    color: ${GreyScale.dark};
    font-size: 16px;
    font-weight: 700;
`;

const Name = styled.div`
    font-size: 16px;
    max-width: calc(100% - 100px);
    min-width: 200px;
`;

const DeleteBtn = styled(MdDeleteForever)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${Primary.default};
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

const SubRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
    height: auto;
    align-items: flex-start;
`;