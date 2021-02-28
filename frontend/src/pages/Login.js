import React from 'react';
import { default as LoginComponent } from '../components/auth/Login';

const Login = () => (
  <>
    <nav className="navbar level" >
      <div className="level-item has-text-centered" />
      <div className="level-item has-text-centered" />
      <div className="level-item has-text-centered" >
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Logo of a circle"
             className={'navbarLogo'} />
        <h1 className="title" >Circle</h1 >
      </div >
      <div className="level-item has-text-centered" />
      <div className="level-item has-text-centered" />
    </nav >

    <section className='section' role={'main'} >

      <div className='container containerLogin' >
        <LoginComponent />
      </div >
    </section >
  </>
);
export default Login;