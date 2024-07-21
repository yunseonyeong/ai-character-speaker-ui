import moment from 'moment';

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