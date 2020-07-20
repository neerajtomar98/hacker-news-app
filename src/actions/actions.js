import Immutable from 'immutable';
import {
    fetchNewsFeedBegin,
    fetchNewsFeedSuccess,
    fetchNewsFeedError,
    upVoteNewsItem,
    hideNewsItem,
    setQueryParamsToStore
} from './actionCreators';
import { loadState } from 'store/sessionStorage';
import urls from 'constants/urls';
import {
    updateRouteSearch,
    appendQueryParameters,
    getQueryParamsObjectFromQueryString
} from 'utils/routeHelpers';

import { isEmptyObject } from 'utils/helpers';

export const fetchNewsFeed = (queryParamsString = "") => {
    console.log(queryParamsString);
    let queryParams = getQueryParamsObjectFromQueryString(queryParamsString);
    queryParams.page = queryParams.page != undefined ? queryParams.page : 0;
    console.log("queryParams:", queryParams);

    let url = urls.get('FETCH_NEWS_FEED_ITEMS');
    url = appendQueryParameters(url, queryParams);

    const cachedState = loadState();
    if (cachedState
        && cachedState.newsFeed
        && cachedState.newsFeed.page == queryParams.page
    ) {
        return dispatch => Immutable.fromJS(cachedState.newsFeed);
    }

    return dispatch => {
        dispatch(fetchNewsFeedBegin());
        fetch(url)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    throw (response.error);
                }
                dispatch(fetchNewsFeedSuccess(response));
                return response;
            })
            .catch(error => {
                dispatch(fetchNewsFeedError(error));
            })
    }
}

export const onUpVoteNews = (newsItemId) => {
    return (dispatch) => {
        dispatch(upVoteNewsItem(newsItemId))
    }
}

export const onHideNews = (newsItemId) => {
    return (dispatch) => {
        dispatch(hideNewsItem(newsItemId))
    }
}

export const goToPreviousPage = () => {
    return (dispatch, getState) => {
        let currentPage = getState().getIn(['newsFeed', 'page']);
        if (currentPage > 0) {
            updateRouteSearch({
                page: parseInt(currentPage - 1)
            }, "/news")
        }
    }
}

export const goToNextPage = () => {
    return (dispatch, getState) => {
        let currentPage = getState().getIn(['newsFeed', 'page']);
        let totalPages = getState().getIn(['newsFeed', 'totalPages']);
        if (currentPage + 1 < totalPages) {
            updateRouteSearch({
                page: parseInt(currentPage + 1)
            }, "/news")
        }
    }

}

export const updateRouteDataToStore = (routeQueryParameters) => {
    return (dispatch, getState) => {
        let routeQueryParamObject = getQueryParamsObjectFromQueryString(routeQueryParameters);
        if (isEmptyObject(routeQueryParamObject)) {
            return;
        }
        let queryParamObject = {
            page: routeQueryParamObject.page !== undefined && routeQueryParamObject.page !== "" ? routeQueryParamObject.page : 1,
        };
        dispatch(setQueryParamsToStore(queryParamObject));
    }
}

