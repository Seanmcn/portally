import React from 'react';
import { Link } from 'react-router-dom';
import { default as ResetPasswordComponent } from '../components/auth/ResetPassword';

const ResetPassword = () => (
  <div className="container containerLogin">
    <h1 className="title">Forgot Password?</h1>

    <ResetPasswordComponent />
    <p className="help">
      Suddenly remembered your password?
      <Link
        to="/login"
      >
        Login
      </Link>
    </p>

  </div>
);
export default ResetPassword;
