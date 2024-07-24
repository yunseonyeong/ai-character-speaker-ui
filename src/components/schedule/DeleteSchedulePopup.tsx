import Loading from "@common/loading/Loading";
import { BackgroundColor, GreyScale, Primary } from "@utils/constant/color";
import { Dispatch, SetStateAction, useState } from "react";
import { deleteScheduleById } from "src/apis/schedule";
import { styled } from "styled-components";

interface DeletePopupProps {
    setShowConfirmPopup: Dispatch<SetStateAction<boolean>>;
    schedule: any;
    getSchedules: any
}

const DeleteSchedulePopup = ({ setShowConfirmPopup, schedule, getSchedules }: DeletePopupProps) => {
    const [loading, setLoading] = useState(false);
    const handleDeleteSchedule = async() => {
        setLoading(true)
        await deleteScheduleById(schedule.voice_id)
        await getSchedules();
        setInterval(()=> {
            setLoading(false)
            setShowConfirmPopup(false);
        }, 500);
              
    };
    return (
        <>
        {loading && <Loading/>}
        <ModalWrapper>
            <Wrapper>
                <Header>예약 취소</Header>
                <Content>
                    예약을 취소할까요?
                </Content>
                
                <ButtonWrapper>
                    <Button onClick={handleDeleteSchedule}>확인</Button>
                    <Button onClick={() => setShowConfirmPopup(false)}>취소</Button>
                </ButtonWrapper>
            </Wrapper>
        </ModalWrapper>
        </>
    );
};

export default DeleteSchedulePopup;


const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
`;

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius : 1rem;
    padding: 2rem;
    color: black;
    z-index: 1000;
    width: 80%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    padding: 30px 0; 
    align-items: center;
    font-size: 16px;
    color: ${GreyScale.dark};
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 100%;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    background-color: ${Primary.default};
    flex-basis: 1;
    padding: 10px 0;
    color: ${BackgroundColor};
    font-size: 16px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 8px;
`;

const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 20px;
`;

const Name = styled.div`
    font-size: 16px;
`;

const NameInput = styled.input`
    width: 80%;
    padding: 10px;
    outline: none;
    color: ${GreyScale.dark};
    border: 1px solid ${GreyScale.default};
    font-size: 16px;
    border-radius: 10px;
`;