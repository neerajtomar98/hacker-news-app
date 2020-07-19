import {
    fetchNewsFeedBegin,
    fetchNewsFeedSuccess,
    fetchNewsFeedError
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
