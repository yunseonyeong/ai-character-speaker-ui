
import zzangu from '@mp3/zzangu.wav';
import { GreyScale } from "@utils/constant/color";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { styled } from 'styled-components';
import useSound from "use-sound";


const SelectCharacter = ({characters, selectedCharacter, setSelectedCharacter}: {characters: any[]; selectedCharacter: any; setSelectedCharacter: React.Dispatch<React.SetStateAction<any>>}
) => {
  const [play] = useSound(zzangu)
  const [slideIndex, setSlideIndex] = useState(characters.findIndex(c => c.type === selectedCharacter.type));
  const slideHandler = (direction: number) => {
    setSlideIndex((prev) => 
      prev + direction < 0 ? 0 : prev + direction > characters.length-1 ? characters.length - 1 : prev + direction)
    };
  const slideRef = useRef<HTMLDivElement>(null);
  
  const playVoice = () => {
    play();
  }

  useEffect(()=> {
    setSelectedCharacter(characters[slideIndex])
  }, [slideIndex])

  return (  
    <>
      <Title>원하는 캐릭터를 선택하세요</Title>
      <SubTitle>캐릭터를 클릭해서 목소리를 확인해보세요</SubTitle>
      <Background>
        <SlideBtn
          className="Left"
          onClick={() => slideHandler(-1)}
        >
          <IoIosArrowBack  size={40} />
        </SlideBtn>
        <ImgContainer
          ref={slideRef}
          style={{
            width: '1700px',
            transition: "all 500ms ease-in-out",
            transform: `translateX(${
              -1 * ((100 / characters.length) * slideIndex)
            }%)`,
          }}
        >
          {characters.map((item, index) => (
            <Character>
            <ImgBox key={index} onClick={()=>playVoice()}>
              <Image src={item.src} alt="character"/>
            </ImgBox>
            <Name>{item.name}</Name>
            </Character>
          ))}
        </ImgContainer>
        <SlideBtn
          className="Right"
          onClick={() => slideHandler(+1)}
        >
          <IoIosArrowForward size={40}/>
        </SlideBtn>
      </Background>
</>  
);
}

export default SelectCharacter;


const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.dark};
  font-size: 24px;
  font-weight: bold;
`;

const SubTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${GreyScale.default};
  font-size: 16px;
`;

const Background = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  .Left {
    cursor: pointer;
    top: 50%;
    left: 2%;
    transform: translate(-50%, -50%);
    color: ${GreyScale.default};
    &:hover {
      color: ${GreyScale.dark};
    }
  }
  .Right {
    cursor: pointer;
    top: 50%;
    left: 98%;
    transform: translate(-50%, -50%);
    color: ${GreyScale.default};
    &:hover {
      color: ${GreyScale.dark};
    }
  }

`;

const Name = styled.div`
  color: ${GreyScale.dark};
  font-size: 20px;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const SlideBtn = styled.div`
  z-index: 100;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const ImgBox = styled.div`
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  cursor: pointer;
`;

const Character = styled.div`
  width: 100%;
`;