import { BackgroundColor, GreyScale, Primary } from '@utils/constant/color';
import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

interface ConfirmPopupProps {
    setShowConfirmPopup: Dispatch<SetStateAction<boolean>>;
    favorites: any;
}

const ConfirmPopup = ({ setShowConfirmPopup, favorites }: ConfirmPopupProps) => {

    const handleDeleteFavorites = () => {
        setShowConfirmPopup(false);
    };
    return (
        <ModalWrapper>
            <Wrapper>
                <Header>즐겨찾기 삭제</Header>
                <Content>
                    "{favorites.name}" 을/를 삭제할까요?
                </Content>
                <ButtonWrapper>
                    <Button onClick={handleDeleteFavorites}>확인</Button>
                    <Button onClick={() => setShowConfirmPopup(false)}>취소</Button>
                </ButtonWrapper>
            </Wrapper>
        </ModalWrapper>
    );
};

export default ConfirmPopup;


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