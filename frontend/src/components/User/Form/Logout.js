import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { Redirect } from 'react-router-dom';

class UserFormLogout extends React.Component {
  handleSubmitForm = (e) => {
    e.preventDefault();
    const { UserStore } = this.props;
    UserStore.logout();
  };

  render() {
    const { UserStore } = this.props;
    const { inProgress, authenticated } = UserStore;
    if (!authenticated) {
      return <Redirect to="/user/login" />;
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

UserFormLogout.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(UserFormLogout));
