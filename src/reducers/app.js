import Immutable from 'immutable';

const initialState = Immutable.fromJS({

});

const app = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default app;