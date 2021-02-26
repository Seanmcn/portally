import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/login' component={Login}/>
    <Route path='/register' component={Register}/>
  </Switch>
)

export default Router