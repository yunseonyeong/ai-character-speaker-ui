import Jadu from '@image/jadu.png';
import Loopy from '@image/loopy.png';
import Spongebob from '@image/spongebob.png';
import zzangu from '@image/zzangu.png';
import JaduWav from '@mp3/jadu.wav';
import LoopyWav from '@mp3/loopy.wav';
import SpongebobWav from '@mp3/spongebob.wav';
import ZzanguWav from '@mp3/zzangu.wav';

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

    return `${year}-${month}-${date} (${daykr[day]}) ${ampm}  ${hours<10?`0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}`;
}

export function datetimeToTimestamp(dateTime: string) {
    return Date.parse(dateTime) / 1000;
}

export const getImgUrl = (character: string) => {
    switch (character) {
        case 'loopy':
            return Loopy;
        case 'spongebob':
            return Spongebob;
        case 'jadu':
            return Jadu;
        case 'zzangu':
            return zzangu;
        default:
            return Loopy;
    }
};

export const getWavFile = (character: string) => {
    switch (character) {
        case 'loopy':
            return LoopyWav;
        case 'spongebob':
            return SpongebobWav;
        case 'jadu':
            return JaduWav;
        case 'zzangu':
            return ZzanguWav;
        default:
            return ZzanguWav;
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
        case 'zzangu':
            return '짱구';
        default:
            return '알수없음';
    }
};

export const getAudioContext = () => {
    AudioContext = window.AudioContext; /* || window.webkitAudioContext */
    const audioContent = new AudioContext();
    return audioContent;
}