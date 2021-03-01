import React from 'react';
import { default as LoginComponent } from '../components/auth/Login';
import {Link} from "react-router-dom";

const Login = () => (
  <>
      <div className='container containerLogin' >
          <div className={'box'}>
            <LoginComponent />
              <p className="help">Don't have an account? <Link to="/register">Register</Link></p>

          </div>
      </div >
  </>
);
export default Login;