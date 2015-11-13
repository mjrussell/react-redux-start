import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import Example from './components/Example';

const routes = (
    <Route component={AppContainer}>
        <Redirect from='/' to='/app' />
        <Route path='app' component={Example} />
        <Redirect from='*' to='/app' />
    </Route>
);

export default routes;
