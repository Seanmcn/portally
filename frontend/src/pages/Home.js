import React from 'react';
import { Link } from 'react-router-dom';
import { inject, observer, PropTypes } from 'mobx-react';

class Home extends React.Component {
  render() {
    const { AuthStore } = this.props;
    const { authenticated } = AuthStore;
    if (authenticated) {
      return (
        <div className="container">
          <div className="box">
            <div className="content">Logged in!</div>
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="box">
          <p><Link to="/login">Login</Link></p>
          <p><Link to="/register">Register</Link></p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  AuthStore: PropTypes.observableObject.isRequired,
};

export default inject('AuthStore')(observer(Home));
