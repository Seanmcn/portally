import React from 'react';
import { Link } from 'react-router-dom';
import UserFormForgotPassword from '../../components/User/Form/ForgotPassword';

const ScreensUserForgotPassword = () => (
  <div className="container containerLogin">
    <h1 className="title">Forgot Password?</h1>
    <UserFormForgotPassword />
    <p className="help">
      Remembered your password? &nbsp;
      <Link to="/login">Login</Link>
    </p>

  </div>
);
export default ScreensUserForgotPassword;
