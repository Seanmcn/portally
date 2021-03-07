import React from 'react';
import { inject, observer } from 'mobx-react';

class Register extends React.Component {

  handleNameChange = e => {
    this.props.AuthStore.setName(e.target.value);
  };

  handleEmailChange = e => {
    this.props.AuthStore.setEmail(e.target.value);
  };

  handleDateOfBirthChange = e => {
    this.props.AuthStore.setDateOfBirth(e.target.value);
  };

  handlePasswordChange = e => {
    this.props.AuthStore.setPassword(e.target.value);
  };

  handleConfirmPasswordChange = e => {
    this.props.AuthStore.setConfirmPassword(e.target.value);
  };

  handleSubmitForm = e => {
    e.preventDefault();
    // todo: check form is valid before??
    this.props.AuthStore.register();
  };

  errorsToMessages () {
    const { errors } = this.props.AuthStore;
    if (errors) {
      const errorKeys = Object.keys(errors);
      const errorMessages = [];

      for (const key of errorKeys) {
        errors[key].forEach((error) => {
          errorMessages.push(error);
        });
      }
      return errorMessages.map(
        (error) => <li className="help is-danger" >{error}</li >);

    }
  }

  errorMessageContainer () {
    const { errors } = this.props.AuthStore;
    if (!errors) return;
    return (<article className="message is-danger" >
      <div className="message-header" >
        <p >Error</p >
      </div >
      <div className="message-body content help" >
        <ul className="mt-0">
          {this.errorsToMessages()}
        </ul >
      </div >
    </article >);
  }

  inputClassNames (key) {
    const { errors } = this.props.AuthStore;
    if (errors && errors.hasOwnProperty(key)) {
      return 'input is-danger';
    } else {
      return 'input';
    }
  }

  render () {
    const { values, inProgress } = this.props.AuthStore;
    return (
      <>
        {this.errorMessageContainer()}
        <div className={'box'} >

          <form onSubmit={this.handleSubmitForm} >

            <div className="field" >
              <label className="label" >Name</label >
              <div className="control" >
                <input
                  type="text"
                  className={this.inputClassNames('name')}
                  // className="input "
                  placeholder="Your name"
                  autoComplete="name"
                  value={values.name}
                  onChange={this.handleNameChange}
                  required
                />
              </div >
            </div >

            <div className="field" >
              <label className="label" >Email</label >
              <div className="control has-icons-left has-icons-right" >
                <input
                  type="email"
                  className={this.inputClassNames('email')}
                  placeholder="Your email"
                  value={values.email}
                  onChange={this.handleEmailChange}
                  autoComplete="email"
                  required
                />
                <span className="icon is-small is-left" >
                            <i className="fas fa-envelope" />
                        </span >
              </div >
            </div >

            <div className={'field'} >
              <label className="label" >Date of Birth</label >
              <input
                type="date"
                className={this.inputClassNames('password_confirmation')}
                value={values.dateOfBirth}
                onChange={this.handleDateOfBirthChange}
                autoComplete="bday"
                required
              />
            </div >

            <div className="field" >
              <label className="label" >Password</label >
              <input
                type="password"
                className={this.inputClassNames('password')}
                value={values.password}
                placeholder="Your password"
                onChange={this.handlePasswordChange}
                autoComplete="new-password"
                data-lpignore="true"
                required
              />
            </div >

            <div className="field" >
              <label className="label" >Confirm Password</label >
              <input
                type="password"
                className={this.inputClassNames('password')}
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={this.handleConfirmPasswordChange}
                autoComplete="new-password"
                data-lpignore="true"
                required
              />
            </div >

            <div className="control" >
              <button
                type="submit"
                className="button is-link"
                disabled={inProgress}
              >
                Register
              </button >
            </div >
          </form >
        </div >
      </>
    );
  }
}

export default inject('AuthStore')(observer(Register));