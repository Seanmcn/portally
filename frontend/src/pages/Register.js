import React from 'react';
import { default as RegisterComponent } from '../components/auth/Register';
import {Link} from "react-router-dom";

const Register = () => (
    <div className='container containerLogin' >
        <h1 className="title">Register</h1>
        <div className={'box'}>
            <RegisterComponent />
            <p className="help">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    </div>
);
export default Register;