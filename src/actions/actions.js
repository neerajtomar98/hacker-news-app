import {
    fetchNewsFeedBegin,
    fetchNewsFeedSuccess,
    fetchNewsFeedError,
    upVoteNewsItem,
    hideNewsItem
} from './actionCreators';
import Immutable from 'immutable';

import urls from 'constants/urls';
import { appendQueryParameters } from 'utils/helpers';
import { loadState } from 'store/sessionStorage';

export const fetchNewsFeed = (url = "", queryParams = { page: 0 }) => {
    if (!url) {
        url = urls.get('FETCH_NEWS_FEED_ITEMS');
    }
    if (queryParams) {
        url = appendQueryParameters(url, queryParams);
    }
    const cachedState = loadState();
    if (cachedState
        && cachedState.newsFeed
        && cachedState.newsFeed.page === queryParams.page
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
            dispatch(fetchNewsFeed(null, { page: parseInt(currentPage - 1) }));
        }
    }
}

export const goToNextPage = () => {
    return (dispatch, getState) => {
        let currentPage = getState().getIn(['newsFeed', 'page']);
        let totalPages = getState().getIn(['newsFeed', 'totalPages']);
        if (currentPage + 1 < totalPages) {
            dispatch(fetchNewsFeed(null, { page: parseInt(currentPage + 1) }));
        }
    }

}
