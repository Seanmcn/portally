import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { Redirect } from 'react-router-dom';

class Logout extends React.Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
    const { AuthStore } = this.props;
    AuthStore.logout();
  };

  render() {
    const { AuthStore } = this.props;
    const { inProgress, authenticated } = AuthStore;
    if (!authenticated) {
      return <Redirect to="/login" />;
    }
    return (
      <button
        type="submit"
        className="button is-link"
        onClick={this.handleSubmitForm}
        disabled={inProgress}
      >

        <span className="icon-text">
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span> Logout</span>
        </span>

      </button>

    );
  }
}

Logout.propTypes = {
  AuthStore: PropTypes.observableObject.isRequired,
};

export default inject('AuthStore')(observer(Logout));
