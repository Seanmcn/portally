import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import UIErrorMessages from '../../../UI/ErrorMessages';

class UserFormSettingsAccountInformation extends React.Component {
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

    handleSubmitForm = (e) => {
      const { UserStore } = this.props;
      e.preventDefault();
      UserStore.update();
    };

    inputClassNames(key) {
      const { UserStore } = this.props;
      const { errors } = UserStore;
      // eslint-disable-next-line no-prototype-builtins
      if (errors && errors.hasOwnProperty(key)) {
        return 'input is-danger';
      }
      return 'input';
    }

    render() {
      const { UserStore } = this.props;
      const { values, inProgress, errors } = UserStore;
      return (
        <>
          <UIErrorMessages errors={errors} />
          <div className="box">

            <h1 className="title">Account Information</h1>
            <form onSubmit={this.handleSubmitForm} autoComplete="off">

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
              <div className="control">
                <button
                  type="submit"
                  className="button is-link"
                  disabled={inProgress}
                >
                  Update
                </button>
              </div>
            </form>

            <hr />
          </div>
        </>
      );
    }
}

UserFormSettingsAccountInformation.propTypes = {
  UserStore: PropTypes.observableObject.isRequired,
};

export default inject('UserStore')(observer(UserFormSettingsAccountInformation));
