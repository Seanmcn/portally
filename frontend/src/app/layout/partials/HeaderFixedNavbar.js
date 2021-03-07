import React from 'react';

class HeaderFixedNavbar extends React.Component {
  render() {
    return (
      <div id="main-navbar" className="navbar is-fixed-top">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <a href="/" className="navbar-item">
              <img
                src={`${process.env.PUBLIC_URL}/logo.svg`}
                alt="Logo of a circle"
                className="navbarLogo"
              />
            </a>
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
                <i className="fas fa-inbox" />
              </div>

              <div className="navbar-item">
                <i className="far fa-comment" />
              </div>

              <div className="navbar-item">
                <i className="far fa-bell" />
              </div>
            </div>

            <div className="navbar-end">

              <div className="navbar-item">
                <i className="fas fa-sign-out-alt" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HeaderFixedNavbar;
