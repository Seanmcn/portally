import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';

class ResetPassword extends React.Component {
  handleEmailChange = (e) => {
    const { AuthStore } = this.props;
    AuthStore.setEmail(e.target.value);
  };

  handleSubmitForm = (e) => {
    const { AuthStore } = this.props;
    e.preventDefault();
    AuthStore.resetPassword();
  };

  render() {
    const { AuthStore } = this.props;
    const { values, inProgress } = AuthStore;
    return (
      <>
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

ResetPassword.propTypes = {
  AuthStore: PropTypes.observableArray.isRequired,
};

export default inject('AuthStore')(observer(ResetPassword));
