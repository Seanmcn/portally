import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import UIErrorMessages from '../../UI/ErrorMessages';

class UserFormForgotPassword extends React.Component {
  handleEmailChange = (e) => {
    const { UserStore } = this.props;
    UserStore.setEmail(e.target.value);
  };

  handleSubmitForm = (e) => {
    const { UserStore } = this.props;
    e.preventDefault();
    UserStore.forgotPassword();
  };

  render() {
    const { UserStore } = this.props;
    const { values, inProgress, errors } = UserStore;
    return (
      <>
        <UIErrorMessages errors={errors} />
        <div className="box">

          <form onSubmit={this.handleSubmitForm}>

            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  type="email"
                  className="input"
                  placeholder="Your email"
                  id="email"
                  value={values.email}
                  onChange={this.handleEmailChange}
                  autoComplete="email"
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
              </div>
            </div>

            <div className="control">
              <button
                type="submit"
                className="button is-link"
                disabled={inProgress}
              >
                Submit!
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

UserFormForgotPassword.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(UserFormForgotPassword));
