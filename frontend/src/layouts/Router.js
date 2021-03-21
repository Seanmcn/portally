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
      <Route exact path={['/reset-password', '/login', '/register', '/forgot-password']}>
        <PublicLayout />
      </Route>
      <Route path="*" component={PrivateLayout} />
    </Switch>
  </Router>
);

export default LayoutsRoute;
