import React from 'react';
import { default as LoginComponent } from '../components/auth/Login';

const Login = () => (
  <>
    <nav className="navbar" role="navigation" aria-label="main navigation" >
      <div className="navbar-brand" >
        Circle
      </div >
    </nav >
    <section className='section' role={'main'}>

    <div className='container' >
      {/*<div className="box" >*/}
      <LoginComponent />
      {/*</div>*/}
    </div >
    </section>


  </>
);
export default Login;