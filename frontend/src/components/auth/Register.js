import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

class Register extends React.Component {
  handleNameChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setName(e.target.value);
  };

  handleEmailChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setEmail(e.target.value);
  };

  handleDateOfBirthChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setDateOfBirth(e.target.value);
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
    AuthStore.register();
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

  inputClassNames(key) {
    const { AuthStore } = this.props;
    const { errors } = AuthStore;
    // eslint-disable-next-line no-prototype-builtins
    if (errors && errors.hasOwnProperty(key)) {
      return 'input is-danger';
    }
    return 'input';
  }

  render() {
    const { AuthStore } = this.props;
    const { values, inProgress } = AuthStore;
    return (
      <>
        {this.errorMessageContainer()}
        <div className="box">

          <form onSubmit={this.handleSubmitForm}>

            <div className="field">
              <label className="label" htmlFor="name">Name</label>
              <div className="control">
                <input
                  type="text"
                  className={this.inputClassNames('name')}
                  id="name"
                  placeholder="Your name"
                  autoComplete="name"
                  value={values.name}
                  onChange={this.handleNameChange}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  type="email"
                  className={this.inputClassNames('email')}
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

            <div className="field">
              <label className="label" htmlFor="date_of_birth">Date of Birth</label>
              <input
                type="date"
                id="date_of_birth"
                className={this.inputClassNames('password_confirmation')}
                value={values.dateOfBirth}
                onChange={this.handleDateOfBirthChange}
                autoComplete="bday"
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <input
                type="password"
                className={this.inputClassNames('password')}
                value={values.password}
                placeholder="Your password"
                id="password"
                onChange={this.handlePasswordChange}
                autoComplete="new-password"
                data-lpignore="true"
                required
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="confirm_password">Confirm Password</label>
              <input
                type="password"
                className={this.inputClassNames('password')}
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
                Register
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

Register.propTypes = {
  AuthStore: PropTypes.observableObject.isRequired,
};

export default inject('AuthStore')(observer(Register));
