function formatTime(x) {
    
    let days = x / 24 / 60;
    let hours = days % 1 * 24;
    let minutes = hours % 1;

    return `${ parseInt(days)} day(s) ${parseInt(hours)} hours ${parseInt(minutes)} minutes`;
}

console.log(formatTime (500));