import React from 'react';
import { Link } from 'react-router-dom';
import UserFormResetPassword from '../../components/User/Form/ResetPassword';

const ScreensUserResetPassword = () => (
  <div className="container containerLogin">
    <h1 className="title">Reset Password</h1>
    <UserFormResetPassword />
    <p className="help">
      Remembered your password? &nbsp;
      <Link to="/login">Login</Link>
    </p>

  </div>
);
export default ScreensUserResetPassword;
