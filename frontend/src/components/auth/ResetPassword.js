import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

class ResetPassword extends React.Component {
  componentDidMount() {
    const windowUrl = window.location.search;
    const token = new URLSearchParams(windowUrl).get('token');
    const { AuthStore } = this.props;
    AuthStore.setResetToken(token);
  }

  handleEmailChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setEmail(e.target.value);
  };

  handlePasswordChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setPassword(e.target.value);
  };

  handleConfirmPasswordChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setConfirmPassword(e.target.value);
  };

  handleSubmitForm = (e) => {
    const { AuthStore } = this.props;
    e.preventDefault();
    AuthStore.resetPassword();
  };

  errorsToMessages() {
    const { AuthStore } = this.props;
    const { errors } = AuthStore;

    if (errors) {
      const errorKeys = Object.keys(errors);
      const errorMessages = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const key of errorKeys) {
        errors[key].forEach((error) => {
          errorMessages.push(error);
        });
      }
      return errorMessages.map(
        (error) => <li className="help is-danger">{error}</li>,
      );
    }
    return false;
  }

  errorMessageContainer() {
    const { AuthStore } = this.props;
    const { errors } = AuthStore;
    if (!errors) return false;
    return (
      <article className="message is-danger">
        <div className="message-header">
          <p>Error</p>
        </div>
        <div className="message-body content help">
          <ul className="mt-0">
            {this.errorsToMessages()}
          </ul>
        </div>
      </article>
    );
  }

  render() {
    const { AuthStore } = this.props;
    const { values, errors, inProgress } = AuthStore;

    return (
      <>
        {this.errorMessageContainer()}
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

ResetPassword.propTypes = {
  AuthStore: PropTypes.observableObject.isRequired,
};

export default inject('AuthStore')(observer(ResetPassword));
