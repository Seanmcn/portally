import React from 'react';
import { Link } from 'react-router-dom';
import { default as RegisterComponent } from '../components/auth/Register';

const Register = () => (
  <div className="container containerLogin">
    <h1 className="title">Register</h1>

    <RegisterComponent />
    <p className="help">
      Already have an account?
      <Link
        to="/login"
      >
        Login
      </Link>
    </p>

  </div>
);
export default Register;
