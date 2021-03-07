import React from 'react';
import { Link } from 'react-router-dom';
import { default as LoginComponent } from '../components/auth/Login';

const Login = () => (
  <>
    <div className="container containerLogin">
      <div className="box">
        <LoginComponent />
      </div>
      <p className="help">
        Don&apos;t have an account?
        <Link
          to="/register"
        >
          Register
        </Link>
      </p>
    </div>
  </>
);
export default Login;
