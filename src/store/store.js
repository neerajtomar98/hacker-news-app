import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { loadState, saveState } from './sessionStorage';

const persistedState = Immutable.fromJS(loadState());

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
});

export default store;