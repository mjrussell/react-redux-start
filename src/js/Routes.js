import React from 'react';
import { Route, Redirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import ExampleContainer from './containers/ExampleContainer';

const routes = (
    <Route component={AppContainer}>
        <Redirect from='/' to='/app' />
        <Route path='app' component={ExampleContainer} />
        <Redirect from='*' to='/app' />
    </Route>
);

export default routes;
