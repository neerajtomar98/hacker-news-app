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

export const appendQueryParameters = (url, queryParameters = {}) => {
    let queryString = url.indexOf('?') !== -1 ? "&" : "?";

    for (const key in queryParameters) {
        if (queryParameters.hasOwnProperty(key) && queryParameters[key] !== null && queryParameters[key] !== undefined) {
            queryString += `${key}=${queryParameters[key]}&`;
        }
    }

    queryString = queryString.slice(0, -1);
    return (url + queryString);
}


export const getQueryParamsObjectFromQueryString = (queryString) => {
    if (queryString === undefined || queryString === "" || typeof queryString !== 'string') {
        return {};
    }
    let keys = queryString.slice(1).split('&');
    let queryParamObject = {};
    keys.forEach((key) => {
        key = key.split('=');
        queryParamObject[key[0]] = decodeURIComponent(key[1] || '');
    });
    return queryParamObject;
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