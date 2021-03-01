import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from "../pages/Home";

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
    {/*<Route path="*" render={(props) => <LayoutNavbar {...props} />}/>*/}
  </Switch>
)

export default Router