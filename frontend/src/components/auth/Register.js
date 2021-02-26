import React from 'react';
import { Redirect } from 'react-router-dom';
import apiClient from '../../utils/api';

const Register = (props) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [initialPassword, setInitialPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [toHome, setToHome] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState([]);
  const [unknownError, setUnknownError] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError(false);
    setUnknownError(false);
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
      apiClient.post('/register', {
        name: name,
        email: email,
        password: initialPassword
      }).then(response => {
        console.log(response);
        // if (response.status === 204) {
        //   props.login();
        //   setToHome(true);
        // } else {
        //   setUnknownError(true);
        //   console.error('Login failed?');
        //   console.error('response:', response);
        // }
      }).catch(error => {
        if (error.response && error.response.status === 422) {
          setAuthError(true);
          for (let key of Object.keys(error.response.data.errors)) {
            setErrorMessages(errorMessages.concat(error.response.data.errors[key]))
          }
        } else {
          setUnknownError(true);
          console.error(error);
        }
      });
    });
  }
  if (toHome === true) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="initialPassword"
            className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
            placeholder="Password"
            value={initialPassword}
            onChange={e => setInitialPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            className={"form-control" + (authError || unknownError ? ' is-invalid' : '')}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            autoComplete="new-password"
          />
        </div>
        {authError ? <div className="alert alert-danger">{errorMessages}</div> : null}
        {unknownError ? <div className="alert alert-danger">There was an error submitting your details.</div> : null}
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;