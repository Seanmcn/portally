import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import apiClient from '../../utils/api';

const Login = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toHome, setToHome] = React.useState(false);
  const [authError, setAuthError] = React.useState(false);
  const [unknownError, setUnknownError] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthError(false);
    setUnknownError(false);
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
      apiClient.post('/login', {
        email: email,
        password: password
      }).then(response => {
        if (response.status === 204) {
          // props.login();
          console.log('logged in!');
          setToHome(true);
        } else {
          setUnknownError(true);
          console.error('Login failed:', response);
        }
      }).catch(error => {
        if (error.response && error.response.status === 422) {
          setAuthError(true);
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
    <div className={'box'}>
      <form onSubmit={handleSubmit}>

        <div className="field" >
          <label className="label" >Email</label >
          <div className="control has-icons-left has-icons-right" >
            <input
              className={'input' +
              (authError || unknownError ? ' is-danger' : '')}
              name="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required />
            <span className="icon is-small is-left" >
              <i className="fas fa-envelope" />
           </span >
            {(authError || unknownError) &&
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
              className={"input" + (authError || unknownError ? ' is-danger' : '')}
              placeholder="Your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {(authError || unknownError) &&
            <span className="icon is-small is-right" >
                <i className="fas fa-exclamation-triangle" />
            </span >
            }
          </div >
        </div >

        {authError ? <p className="help is-danger">Credentials not recognised. Please try again.</p> : null}
        {unknownError ? <p className="help is-danger">There was an error submitting your details.</p> : null}
        <div className="control" >
          <button type="submit"  className="button is-link" >Login</button >
        </div >
      </form>

      <p className="help">Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default Login;