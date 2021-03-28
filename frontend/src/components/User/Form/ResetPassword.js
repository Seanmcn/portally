import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import UIErrorMessages from '../../UI/ErrorMessages';

class UserFormResetPassword extends React.Component {
  componentDidMount() {
    const windowUrl = window.location.search;
    const token = new URLSearchParams(windowUrl).get('token');
    const { UserStore } = this.props;
    UserStore.setResetToken(token);
  }

  handleEmailChange = (e) => {
    const { UserStore } = this.props;
    UserStore.setEmail(e.target.value);
  };

  handlePasswordChange = (e) => {
    const { UserStore } = this.props;
    UserStore.setPassword(e.target.value);
  };

  handleConfirmPasswordChange = (e) => {
    const { UserStore } = this.props;
    UserStore.setConfirmPassword(e.target.value);
  };

  handleSubmitForm = (e) => {
    const { UserStore } = this.props;
    e.preventDefault();
    UserStore.resetPassword();
  };

  render() {
    const { UserStore } = this.props;
    const { values, errors, inProgress } = UserStore;

    return (
      <>
        <UIErrorMessages errors={errors} />
        <div className="box">

          <form onSubmit={this.handleSubmitForm}>

            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className={`input${
                    errors ? ' is-danger' : ''}`}
                  name="email"
                  type="email"
                  placeholder="Your email"
                  value={values.email}
                  onChange={this.handleEmailChange}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope" />
                </span>
                {(errors)
                && (
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <div className="control has-icons-right">
                <input
                  type="password"
                  name="password"
                  className={`input${errors ? ' is-danger' : ''}`}
                  placeholder="Your password"
                  value={values.password}
                  onChange={this.handlePasswordChange}
                  required
                />
                {(errors)
                && (
                <span className="icon is-small is-right">
                  <i className="fas fa-exclamation-triangle" />
                </span>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                className={`input${errors ? ' is-danger' : ''}`}
                placeholder="Confirm password"
                value={values.confirmPassword}
                id="confirm_password"
                onChange={this.handleConfirmPasswordChange}
                autoComplete="new-password"
                data-lpignore="true"
                required
              />
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

UserFormResetPassword.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(UserFormResetPassword));
