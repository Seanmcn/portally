import React from 'react';
import { Link } from 'react-router-dom';
import UserFormRegister from '../../components/User/Form/Register';

const ScreensUserRegister = () => (
  <div className="container containerLogin">
    <h1 className="title">Register</h1>
    <UserFormRegister />
    <p className="help">
      Already have an account?&nbsp;
      <Link to="/user/login">Login</Link>
    </p>

  </div>
);
export default ScreensUserRegister;
