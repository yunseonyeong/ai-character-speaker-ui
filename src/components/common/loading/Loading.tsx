import spinner from '@image/loading.gif';
import Image from 'next/image';
import styled from 'styled-components';

const Loading = () => {
  return (

    <LoadingSpinner>
      <Wrapper>
        <Image  src={spinner} alt="loading"></Image>
      </Wrapper>  
    </LoadingSpinner>
  )
}

export default Loading

const LoadingSpinner = styled.div`
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
    background: transparent;
    border-radius : 1rem;
    padding: 2rem;
    color: black;
    z-index: 1000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;