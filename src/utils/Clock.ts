

export const getTime = (currentTime: Date) => {
    const hours = currentTime.getHours() - (currentTime.getHours() >= 12 ? 12 : 0);
    const period = currentTime.getHours() >= 12 ? 'PM' : 'AM';
    const date = currentTime.toLocaleDateString();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return { hours, period, minutes, seconds,date}
}