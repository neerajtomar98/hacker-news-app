import actions from '../constants/actions';

export const fetchNewsFeedBegin = payload => ({
    type: actions.get('FETCH_NEWS_FEED_BEGIN'),
    payload
});

export const fetchNewsFeedSuccess = (payload) => ({
    type: actions.get('FETCH_NEWS_FEED_SUCCESS'),
    payload
});

export const fetchNewsFeedError = (error) => ({
    type: actions.get('FETCH_NEWS_FEED_ERROR'),
    error
});


