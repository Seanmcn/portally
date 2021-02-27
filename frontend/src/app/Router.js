import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login';

const Router = () => (
  <Switch>
    <Route path='/login' component={Login}/>
    {/*<Route path="*" render={(props) => <LayoutNavbar {...props} />}/>*/}
  </Switch>
)

export default Router