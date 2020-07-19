import {
    fetchNewsFeedBegin,
    fetchNewsFeedSuccess,
    fetchNewsFeedError,
    upVoteNewsItem,
    hideNewsItem
} from './actionCreators';
import urls from '../constants/urls';

export const fetchNewsFeed = () => {
    return dispatch => {
        dispatch(fetchNewsFeedBegin());
        fetch(urls.get('FETCH_NEWS_FEED_ITEMS'))
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
