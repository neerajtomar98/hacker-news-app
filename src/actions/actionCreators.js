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

export const upVoteNewsItem = (newItemId) => ({
    type: actions.get('UPVOTE_NEWS_ITEM'),
    payload: newItemId
});

export const hideNewsItem = (newItemId) => ({
    type: actions.get('HIDE_NEWS_ITEM'),
    payload: newItemId
});


