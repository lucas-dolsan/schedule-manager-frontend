import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './components/Home'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from={'/'} exact={true} to={'/home'} />
        <Route path={'/home'} exact={true} component={props => <Home {...props} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
