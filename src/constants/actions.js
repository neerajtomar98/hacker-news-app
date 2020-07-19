import Immutable from 'immutable';

const actions = Immutable.Map({
    ERROR: 'ERROR',
    EMPTY_ERROR: 'EMPTY_ERROR',
    INTERNET_CONNECTIVITY_STATUS: 'INTERNET_CONNECTIVITY_STATUS',

    FETCH_NEWS_FEED_BEGIN: 'FETCH_NEWS_FEED_BEGIN',
    FETCH_NEWS_FEED_SUCCESS: 'FETCH_NEWS_FEED_SUCCESS',
    FETCH_NEWS_FEED_ERROR: 'FETCH_NEWS_FEED_ERROR',

    UPVOTE_NEWS_ITEM: 'UPVOTE_NEWS_ITEM',
    HIDE_NEWS_ITEM: 'HIDE_NEWS_ITEM'
})

export default actions;