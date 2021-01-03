import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Books from './components/Books';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import apiClient from './services/api';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(
    sessionStorage.getItem('loggedIn') === 'true' || false
  );
  const login = () => {
    console.log('login?');
    setLoggedIn(true);
    sessionStorage.setItem('loggedIn', 'true');
  };
  const logout = () => {
    console.log('logout?');
    apiClient.post('/logout').then(response => {
      if (response.status === 204) {
        setLoggedIn(false);
        sessionStorage.setItem('loggedIn', 'false');
      }
    })
  };
  const authLink = loggedIn
    ? <button onClick={logout} className="nav-link btn btn-link">Logout</button>
    : <NavLink to='/login' className="nav-link">Login</NavLink>;
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className="nav-link">Books</NavLink>
            </li>
            <li className="nav-item">
              {authLink}
            </li>
            <li>
              <NavLink to='/register' className="nav-link">Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container mt-5 pt-5">
        <Switch>
          <Route exact path='/'>
            <Books loggedIn={loggedIn} />
          </Route>
          <Route path='/login' render={props => (
            <Login {...props} login={login} />
          )} />
          <Route path='/register' render={props => (
            <Register {...props} />
          )} />
        </Switch>
      </div>
    </Router>

  );
};

export default App;