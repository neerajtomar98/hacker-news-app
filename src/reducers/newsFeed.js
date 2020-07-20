import Immutable from 'immutable';
import actionConsts from '../constants/actions';

const initialState = Immutable.fromJS({
    feedItems: [],
    isFetching: false,
    error: null,
    page: 0,
    totalPages: 0

});

const newsFeed = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionConsts.get('FETCH_NEWS_FEED_BEGIN'): {
            return state.set('isFetching', true);
        }
        case actionConsts.get('FETCH_NEWS_FEED_SUCCESS'): {
            let newsFeed = action.payload.hits;
            return state.set('feedItems', Immutable.fromJS(newsFeed))
                .set('isFetching', false)
                .set('page', action.payload.page)
                .set('totalPages', action.payload.nbPages);
        }
        case actionConsts.get('FETCH_NEWS_FEED_ERROR'): {
            return state
                .set('error', action.error)
                .set('isFetching', false)
                .set('page', 0)
                .set('totalPages', 0);
        }
        case actionConsts.get('UPVOTE_NEWS_ITEM'): {
            let itemId = action.payload;
            let updatedItems = state.get('feedItems');
            updatedItems = updatedItems.update(
                updatedItems.findIndex(function (item) {
                    return item.get("objectID") === itemId;
                }), function (item) {
                    let points = item.get('points');
                    return item.set("points", points + 1);
                }
            );
            return state
                .set('feedItems', updatedItems)
                .set('error', action.error)
                .set('isFetching', false);
        }
        case actionConsts.get('HIDE_NEWS_ITEM'): {
            let itemId = action.payload;
            let updatedItems = state.get('feedItems');
            updatedItems = updatedItems.delete(
                updatedItems.findIndex(function (item) {
                    return item.get("objectID") === itemId;
                })
            );
            return state
                .set('feedItems', updatedItems)
                .set('error', action.error)
                .set('isFetching', false);
        }
        case actionConsts.get('SET_ADMIN_JOURNEYS_QUERY_PARAMS_TO_STORE'):
            return state.set('page', parseInt(action.queryParamObject.page, 10))

        default:
            return state;
    }
};

export default newsFeed;