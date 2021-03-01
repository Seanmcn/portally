import React from 'react';
import { inject, observer } from "mobx-react";

class Login extends React.Component {

  handleEmailChange = e => {
    this.props.AuthStore.setEmail(e.target.value);
  };

  handlePasswordChange = e => {
    this.props.AuthStore.setPassword(e.target.value);
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.AuthStore.login();
  };

  render() {
    const { values, errors, inProgress } = this.props.AuthStore;
    return(

        <form onSubmit={this.handleSubmitForm}>

          <div className="field" >
            <label className="label" >Email</label >
            <div className="control has-icons-left has-icons-right" >
              <input
                className={'input' +
                (errors ? ' is-danger' : '')}
                name="email"
                type="email"
                placeholder="Your email"
                value={values.email}
                onChange={this.handleEmailChange}
                required />
              <span className="icon is-small is-left" >
              <i className="fas fa-envelope" />
           </span >
              {(errors) &&
              <span className="icon is-small is-right" >
                <i className="fas fa-exclamation-triangle" />
            </span >
              }
            </div >
          </div >

          <div className="field" >
            <label className="label" >Password</label >
            <div className="control has-icons-right" >
              <input
                type="password"
                name="password"
                className={"input" + (errors ? ' is-danger' : '')}
                placeholder="Your password"
                value={values.password}
                onChange={this.handlePasswordChange}
                required
              />
              {(errors) &&
              <span className="icon is-small is-right" >
                <i className="fas fa-exclamation-triangle" />
            </span >
              }
            </div >
          </div >

          {errors ? <p className="help is-danger">Credentials not recognised. Please try again.</p> : null}
          {errors ? <p className="help is-danger">There was an error submitting your details.</p> : null}
          <div className="control" >
            <button
              type="submit"
              className="button is-link"
              disabled={inProgress}
            >
              Login</button >
          </div >
        </form>

    )
  }
}

export default inject('AuthStore')(observer(Login));