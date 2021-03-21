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
    <Route path="/user/login" component={ScreensUserLogin} />
    <Route path="/user/register" component={ScreensUserRegister} />
    <Route path="/user/forgot-password" component={ScreensUserForgotPassword} />
    <Route path="/user/reset-password" component={ScreensUserResetPassword} />
  </Switch>
);

export default ScreensRoot;
