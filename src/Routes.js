import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Home/components/Login'
import { Cadastro } from './components/Home/components/Cadastro'
import { Registrar } from './components/Home/components/Registrar'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from={'/'} exact={true} to={'/login'} />
        <Redirect from={'/'} exact={true} to={'/Cadastro'} />
        <Redirect from={'/'} exact={true} to={'/Registrar'} />
        <Redirect from={'/'} exact={true} to={'/home'} />
        <Route path={'/home'} exact={true} component={props => <Home {...props} />} />
        <Route path={'/cadastro'} exact={true} component={props => <Cadastro {...props} />} />
        <Route path={'/Registrar'} exact={true} component={props => <Registrar {...props} />} />
        <Route path={'/login'} exact={true} component={props => <Login {...props} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
