import React from 'react';
import {
  // BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import ScreensUserLogin from './User/Login';
import ScreensUserRegister from './User/Register';
import ScreensUserForgotPassword from './User/ForgotPassword';
import ScreensUserResetPassword from './User/ResetPassword';
import ScreensHome from './Home';

const ScreensRoot = () => (
  <Switch>
    <Route exact path="/" component={ScreensHome} />
    <Route path="/login" component={ScreensUserLogin} />
    <Route path="/register" component={ScreensUserRegister} />
    <Route path="/forgot-password" component={ScreensUserForgotPassword} />
    <Route path="/reset-password" component={ScreensUserResetPassword} />
  </Switch>
);

export default ScreensRoot;
