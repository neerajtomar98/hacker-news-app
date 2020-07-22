import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers/rootReducer';
import { loadState, saveState } from './sessionStorage';

const persistedState = Immutable.fromJS(loadState());

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(
    throttle(() => {
        saveState({ newsFeed: store.getState().get('newsFeed') });
    }, 1000)
);

export default store;