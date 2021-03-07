import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <div className="container">
      <div className="box">
        <p><Link to="/login">Login</Link></p>
        <p><Link to="/register">Register</Link></p>
      </div>
    </div>

  </>
);
export default Home;
