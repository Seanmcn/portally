import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';

class ScreensIndex extends React.Component {
  render() {
    const { UserStore } = this.props;
    const { authenticated } = UserStore;
    if (authenticated) {
      return (
        <Redirect to="/home" />
      );
    }
    return (
      <div className="container">
        <div className="box">
          <Link to="/user/login" className="button">Login</Link>
          <br />
          <Link to="/user/register" className="button">Register</Link>
        </div>
      </div>
    );
  }
}

ScreensIndex.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(ScreensIndex));
