import {
    fetchNewsFeedBegin,
    fetchNewsFeedSuccess,
    fetchNewsFeedError,
    upVoteNewsItem,
    hideNewsItem
} from './actionCreators';

import urls from 'constants/urls';
import { appendQueryParameters } from 'utils/helpers';

export const fetchNewsFeed = (url = "") => {
    if (!url) {
        url = urls.get('FETCH_NEWS_FEED_ITEMS');
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
        console.log(currentPage);
        if (currentPage > 0) {
            let url = appendQueryParameters(urls.get('FETCH_NEWS_FEED_ITEMS'), { page: parseInt(currentPage - 1) });
            dispatch(fetchNewsFeed(url));
        }
    }
}

export const goToNextPage = () => {
    return (dispatch, getState) => {
        let currentPage = getState().getIn(['newsFeed', 'page']);
        let totalPages = getState().getIn(['newsFeed', 'totalPages']);
        if (currentPage < totalPages) {
            let url = appendQueryParameters(urls.get('FETCH_NEWS_FEED_ITEMS'), { page: parseInt(currentPage + 1) });
            dispatch(fetchNewsFeed(url));
        }
    }

}
