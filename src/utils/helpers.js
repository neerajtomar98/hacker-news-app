export const timeElapsed = (current, previous) => {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var timePassed = current - previous;

    if (timePassed < msPerMinute) {
        return Math.round(timePassed / 1000) + ' seconds ago';
    }

    else if (timePassed < msPerHour) {
        return Math.round(timePassed / msPerMinute) + ' minutes ago';
    }

    else if (timePassed < msPerDay) {
        return Math.round(timePassed / msPerHour) + ' hours ago';
    }

    else if (timePassed < msPerMonth) {
        return Math.round(timePassed / msPerDay) + ' days ago';
    }

    else if (timePassed < msPerYear) {
        return Math.round(timePassed / msPerMonth) + ' months ago';
    }

    else {
        return Math.round(timePassed / msPerYear) + ' years ago';
    }
}