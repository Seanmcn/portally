import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import PublicLayout from './public/Layout';
import PrivateLayout from './private/Layout';

const LayoutsRoute = () => (
  <Router>
    <Switch>
      <Route exact path={['/', '/user/reset-password', '/user/login', '/user/register', '/user/forgot-password']}>
        <PublicLayout />
      </Route>
      <Route path="*" component={PrivateLayout} />
    </Switch>
  </Router>
);

export default LayoutsRoute;
