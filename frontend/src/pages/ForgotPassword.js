import React from 'react';
import { Link } from 'react-router-dom';
import { default as ForgotPasswordComponent } from '../components/auth/ForgotPassword';

const ForgotPassword = () => (
  <div className="container containerLogin">
    <h1 className="title">Forgot Password?</h1>

    <ForgotPasswordComponent />
    <p className="help">
      Remembered your password? &nbsp;
      <Link
        to="/login"
      >
        Login
      </Link>
    </p>

  </div>
);
export default ForgotPassword;
