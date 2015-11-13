import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createHashHistory';

import rootReducer from '../reducers/RootReducer';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
    predicate: () => __DEBUG__,
});

let finalCreateStore;

if (__DEV_PANEL__) {
    const { devTools, persistState } = require('redux-devtools');
    finalCreateStore = (routes) => compose(
        reduxReactRouter({
            routes,
            createHistory
        }),
        applyMiddleware(thunkMiddleware, loggerMiddleware),
        devTools(),
        persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(createStore);
} else {
    finalCreateStore = (routes) => compose(
        reduxReactRouter({
            routes,
            createHistory
        }),
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )(createStore);
}

export default function configureStore(routes, initialState) {
    const store = finalCreateStore(routes)(rootReducer, initialState);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers/RootReducer', () => {
            const nextReducer = require('../reducers/RootReducer');
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
