import moment from 'moment';

export function getFormattedUnixDateTime(timestamp: number) {
    return timestamp ? moment.unix(timestamp).format('yyyy-MM-dd HH:mm:ss') : '-';
}