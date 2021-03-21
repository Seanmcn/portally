import React from 'react';
import { Link } from 'react-router-dom';
import UserFormLogin from '../../components/User/Form/Login';

const ScreensUserLogin = () => (
  <>
    <div className="container containerLogin">
      <div className="box">
        <UserFormLogin />
      </div>
      <p className="help">
        Don&apos;t have an account?&nbsp;
        <Link to="/register">Register</Link>
      </p>
    </div>
  </>
);
export default ScreensUserLogin;
