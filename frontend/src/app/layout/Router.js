import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import LayoutNavbar from './LayoutNavbar';

const Router = () => (
  <Switch>
    <Route path="/login" render={(props) => <Layout {...props} />} />
    <Route path="/register" render={(props) => <Layout {...props} />} />
    <Route path="/forgot-password" render={(props) => <Layout {...props} />} />
    <Route path="/reset-password" render={(props) => <Layout {...props} />} />
    <Route path="*" render={(props) => <LayoutNavbar {...props} />} />
  </Switch>
);

export default Router;
