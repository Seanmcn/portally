import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar level">
        <div className="level-item has-text-centered" />
        <div className="level-item has-text-centered" />
        <div className="level-item has-text-centered">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Logo of a circle"
              className="navbarLogo"
            />

          </a>
          <h1 className="title">Circle</h1>

        </div>
        <div className="level-item has-text-centered" />
        <div className="level-item has-text-centered" />
      </nav>
    );
  }
}

export default Header;
