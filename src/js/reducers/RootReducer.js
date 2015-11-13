import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import example from './ExampleReducer';

const rootReducer = combineReducers({
    router: routerStateReducer,
    example,
});

export default rootReducer;
