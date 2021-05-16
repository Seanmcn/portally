// todo: disable this once links finalised
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';

class ScreensHome extends React.Component {
  render() {
    const { UserStore } = this.props;
    const { authenticated } = UserStore;
    if (authenticated) {
      return (
        <>
          Home page!
        </>
      );
    }
    return (
      <div className="container">
        <div className="box">
          <p><Link to="/user/login">Login</Link></p>
          <p><Link to="/user/register">Register</Link></p>
        </div>
      </div>
    );
  }
}

ScreensHome.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(ScreensHome));
