import Jadu from '@image/jadu.png'
import Jjangu from '@image/jjangu.png'
import Loopy from '@image/loopy.png'
import Spongebob from '@image/spongebob.png'
import { getFormattedUnixDateTime } from "@utils/common-util"
import Image from 'next/image'
import styled from 'styled-components'

const ScheduleItem = ({schedule}: {schedule: any}) => {

    const getImgUrl = (character: string) => {
        switch(character) {
            case 'loopy':
                return Loopy
            case 'spongebob':
                return Spongebob
            case 'jadu':
                return Jadu
            case 'jjangu':
                return Jjangu
            default:
                return Loopy;
    }
}

  return (
    <Wrapper>
        <Row>
            <DateTime>{getFormattedUnixDateTime(schedule.played_time)}</DateTime>
            <FavoritesBtn />
        </Row>
        <Row>
            <ImgBox>
                <Image src={getImgUrl(schedule.character)} alt="character" width={100}/>
            </ImgBox>
            <Content>{schedule.content}</Content>
        </Row>
    </Wrapper>
  )
}

export default ScheduleItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Row = styled.div`
    width: 100%;
    display: flex;
`;

const DateTime = styled.div``;

const FavoritesBtn = styled.div``;

const ImgBox = styled.div`
    max-width: 50px;
`;

const Content = styled.div``;