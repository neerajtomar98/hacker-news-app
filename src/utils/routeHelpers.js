import createHashHistory from 'history/createHashHistory'
import { createMemoryHistory } from 'history';
import queryString from 'query-string';

var appHistory = createMemoryHistory();

if (typeof window !== 'undefined') {
    appHistory = createHashHistory({
        hashType: 'slash'
    });
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

export const updateRouteSearch = (searchObj = {}, pathname = "") => {
    searchObj = {
        ...queryString.parse(appHistory.location.search),
        ...searchObj
    };

    const search = queryString.stringify(searchObj, {
        encode: false
    });
    let pushObj = {
        search
    };
    if (pathname !== "") {
        pushObj = {
            ...pushObj,
            pathname
        };
    }
    appHistory.push(pushObj);
}