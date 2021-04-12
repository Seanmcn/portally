import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import UIErrorMessages from '../../../UI/ErrorMessages';

class UserFormSettingsSecurity extends React.Component {
  componentDidMount() {
    const { UserStore } = this.props;
    UserStore.get();
  }

    handleNameChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setName(e.target.value);
    };

    handleEmailChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setEmail(e.target.value);
    };

    handleDateOfBirthChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setDateOfBirth(e.target.value);
    };

    handlePasswordChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setPassword(e.target.value);
    };

    handleNewPasswordChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setNewPassword(e.target.value);
    };

    handleConfirmPasswordChange = (e) => {
      const { UserStore } = this.props;
      UserStore.setConfirmPassword(e.target.value);
    };

    handleSubmitForm = (e) => {
      const { UserStore } = this.props;
      e.preventDefault();
      UserStore.updatePassword();
    };

    inputClassNames(key) {
      const { UserStore } = this.props;
      const { errorsPasswordUpdate } = UserStore;
      // eslint-disable-next-line no-prototype-builtins
      if (errorsPasswordUpdate && errorsPasswordUpdate.hasOwnProperty(key)) {
        return 'input is-danger';
      }
      return 'input';
    }

    render() {
      const { UserStore } = this.props;
      const { values, inProgress, errorsPasswordUpdate } = UserStore;
      return (
        <>
          <UIErrorMessages errors={errorsPasswordUpdate} />
          <div className="box">
            <form onSubmit={this.handleSubmitForm} autoComplete="off">
              <h1 className="title">Security</h1>
              <h2 className="subtitle">Update Password</h2>

              <div className="field">
                <label className="label" htmlFor="password">Current Password</label>
                <input
                  type="password"
                  className={this.inputClassNames('password')}
                  value={values.password}
                  placeholder="Your password"
                  id="password"
                  onChange={this.handlePasswordChange}
                  autoComplete="new-password"
                  data-lpignore="true"
                />
              </div>
              <div className="field">
                <label className="label" htmlFor="new_password">New Password</label>
                <input
                  type="password"
                  className={this.inputClassNames('password')}
                  value={values.newPassword}
                  placeholder="Your password"
                  id="new_password"
                  onChange={this.handleNewPasswordChange}
                  autoComplete="new-password"
                  data-lpignore="true"
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
                />
              </div>
              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={inProgress}
                >
                  Update Password
                </button>
              </div>
            </form>

          </div>
        </>
      );
    }
}

UserFormSettingsSecurity.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(UserFormSettingsSecurity));
