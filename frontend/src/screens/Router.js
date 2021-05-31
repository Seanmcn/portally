import React from 'react';
import {
  // BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import ScreensUserLogin from './User/Login';
import ScreensUserRegister from './User/Register';
import ScreensUserForgotPassword from './User/ForgotPassword';
import ScreensUserResetPassword from './User/ResetPassword';
import ScreensUserSettings from './User/Settings';
import ScreensMessageInbox from './Message/Inbox';
import ScreensHome from './Home';
import ScreensIndex from './Index';

const ScreensRoot = () => (
  <Switch>
    <Route exact path="/" component={ScreensIndex} />
    <Route path="/user/login" component={ScreensUserLogin} />
    <Route path="/user/register" component={ScreensUserRegister} />
    <Route path="/user/forgot-password" component={ScreensUserForgotPassword} />
    <Route path="/user/reset-password" component={ScreensUserResetPassword} />
    {/* Logged in routes: */}
    <Route exact path="/home" component={ScreensHome} />
    <Route path="/user/settings" component={ScreensUserSettings} />
    <Route exact path="/messages" component={ScreensMessageInbox} />
    <Route path="/messages/thread/:id" component={ScreensMessageInbox} />
  </Switch>
);

export default ScreensRoot;
