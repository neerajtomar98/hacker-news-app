import Immutable from 'immutable';
import actionConsts from '../constants/actions';

const initialState = Immutable.fromJS({
    feedItems: [],
    isFetching: false,
    error: null,
    page: 1

});

const newsFeed = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.get('FETCH_NEWS_FEED_BEGIN'): {
            return state.set('isFetching', true);
        }
        case actionConsts.get('FETCH_NEWS_FEED_SUCCESS'): {
            let newsFeed = action.payload.hits;
            return state.set('feedItems', Immutable.fromJS(newsFeed))
                .set('isFetching', false);
        }
        case actionConsts.get('FETCH_NEWS_FEED_ERROR'): {
            return state
                .set('error', action.error)
                .set('isFetching', false);
        }
        default:
            return state;
    }
};

export default newsFeed;