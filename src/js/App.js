import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { ReduxRouter } from 'redux-router';
import configureStore from './store/StoreConfig';
import routes from './Routes';

const store = configureStore(routes);

function renderDebug(store) {
    if (__DEV_PANEL__) {
        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        );
    } else {
        return null;
    }
}

ReactDOM.render(
    <div>
        <Provider store={store}>
            <ReduxRouter />
        </Provider>
        {renderDebug(store)}
    </div>,
    document.getElementById('react')
);


