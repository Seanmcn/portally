import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from '../../../components/User/Form/Logout';

const Header = () => (
  <div id="main-navbar" className="navbar is-fixed-top ">
    <div className="container">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <img
            src={`${process.env.PUBLIC_URL}/logo.svg`}
            alt="Logo of a circle"
            className="navbarLogo"
          />
          <h1 className="subtitle">Portally</h1>
        </NavLink>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" href="#">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">

          <div className="navbar-item">
            <NavLink to="/messages" title="Messages">
              <span className="icon">
                <i className="fas fa-envelope" />
              </span>
            </NavLink>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <NavLink to="/user/settings" title="Account Settings">
              <span className="icon">
                <i className="fas fa-cogs" />
              </span>
            </NavLink>
          </div>
          <div className="navbar-item">
            <Logout />
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default Header;
