import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  handleEmailChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setEmail(e.target.value);
  };

  handlePasswordChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setPassword(e.target.value);
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { AuthStore } = this.props;
    AuthStore.login();
  };

  render() {
    const { AuthStore } = this.props;
    const { values, errors, inProgress } = AuthStore;
    if (AuthStore.authenticated) {
      return <Redirect to="/" />;
    }
    return (

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

        {errors ? <p className="help is-danger">Credentials not recognised. Please try again.</p> : null}
        {errors ? <p className="help is-danger">There was an error submitting your details.</p> : null}
        <div className="control">
          <button
            type="submit"
            className="button is-link"
            disabled={inProgress}
          >
            Login
          </button>
        </div>
      </form>

    );
  }
}

Login.propTypes = {
  AuthStore: PropTypes.observableObject.isRequired,
};

export default inject('AuthStore')(observer(Login));
