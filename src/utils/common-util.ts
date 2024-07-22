import Jadu from '@image/jadu.png';
import Jjangu from '@image/jjangu.png';
import Loopy from '@image/loopy.png';
import Spongebob from '@image/spongebob.png';

export function getFormattedUnixDateTime(timestamp: number) {
    const daykr = ["일", "월", "화", "수", "목", "금", "토"];
    const datetime = new Date(timestamp * 1000);
    let hours = datetime.getHours();
    const minutes = datetime.getMinutes();
    const month = datetime.getMonth() + 1;
    const day = datetime.getDay();
    const year = datetime.getFullYear();
    const date = datetime.getDate();
    const ampm = hours < 12 ? "오전" : "오후";
    hours = hours > 12 ? hours - 12 : hours;

    return `${year}-${month}-${date} (${daykr[day]}) ${ampm} ${hours}:${minutes}`;
}

export const getImgUrl = (character: string) => {
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

export const getCharacterName = (character: string) => {
    switch (character) {
        case 'loopy':
            return '루피';
        case 'spongebob':
            return '스폰지밥';
        case 'jadu':
            return '자두';
        case 'jjangu':
            return '짱구';
        default:
            return '알수없음';
    }
};