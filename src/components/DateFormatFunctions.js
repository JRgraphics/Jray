export function dateToString(date) {
    const d = new Date(date * 1000);
    const date_str = d.getDate() + '.' + (d.getMonth() + 1 );
    return date_str;
}

export function timeToString(date) {
    const d = new Date(date * 1000);
    const time_str = d.getHours() + ':' + ('0'+d.getMinutes()).slice(-2);
    return time_str;
}