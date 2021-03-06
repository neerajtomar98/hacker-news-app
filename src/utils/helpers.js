export const isEmptyObject = (obj = {}) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export const timeElapsedSince = (timeStamp) => {

    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;

    let current = Math.round((new Date()).getTime() / 1000);

    let timePassed = current - timeStamp;

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

export const getBaseUrl = (urlString, withProtocol = true) => {
    if (!urlString) {
        return "";
    }
    var pathArray = urlString.split('/');
    var protocol = pathArray[0];
    var host = pathArray[2];
    var url = withProtocol ? protocol + '//' + host : host;
    return url;
}

