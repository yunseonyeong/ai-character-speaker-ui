import { BackgroundColor, GreyScale, Primary } from '@utils/constant/color';
import { Dispatch, SetStateAction } from 'react';
import useInput from 'src/hooks/useInput';
import { styled } from 'styled-components';

interface FavoritesPopupProps {
    setShowFavoritesPopup: Dispatch<SetStateAction<boolean>>;
    setIsMarked: Dispatch<SetStateAction<boolean>>;
    voice: any;
}

const FavoritesPopup = ({ setShowFavoritesPopup, setIsMarked, voice }: FavoritesPopupProps) => {
    const [nameValue, onChangeNameValue] = useInput('')
    const handleAddFavorites = () => {
        if (nameValue.length > 0) {
        setIsMarked(true);
        setShowFavoritesPopup(false);
        }
    };

    return (
        <ModalWrapper>
            <Wrapper>
                <Header>즐겨찾기 추가</Header>
                <Content>
                    <Name>이름</Name>
                    <NameInput placeholder='이름을 지정해주세요' value={nameValue}  onChange={onChangeNameValue}/>
                </Content>
                <ButtonWrapper>
                    <ConfirmButton onClick={handleAddFavorites} disabled={nameValue.length ? false : true}>추가</ConfirmButton>
                    <Button onClick={() => setShowFavoritesPopup(false)}>취소</Button>
                </ButtonWrapper>
            </Wrapper>
        </ModalWrapper>
    );
};

export default FavoritesPopup;

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

const ConfirmButton= styled(Button)<{disabled: boolean}>`
    background-color: ${props => props.disabled ? GreyScale.default : Primary.default};
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