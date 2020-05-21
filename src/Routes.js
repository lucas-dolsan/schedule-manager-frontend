import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeNav } from "./components/Home";
import { Login } from "./components/Home/components/Login";
import { Cadastro } from "./components/Home/components/Cadastro";
import { Registrar } from "./components/Home/components/Registrar";
import { Home } from "./components/Home/components/Home";
import { Cronogramas } from "./components/Cronogramas";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from={"/"} exact={true} to={"/login"} />
        <Route
          path={"/home"}
          exact={true}
          component={(props) => <HomeNav {...props} />}
        />
        <Route
          path={"/cronogramas"}
          exact={true}
          component={(props) => <Cronogramas {...props} />}
        />
        <Route
          path={"/cadastro"}
          exact={true}
          component={(props) => <Cadastro {...props} />}
        />
        <Route
          path={"/Registrar"}
          exact={true}
          component={(props) => <Registrar {...props} />}
        />
        <Route
          path={"/login"}
          exact={true}
          component={(props) => <Login {...props} />}
        />
        <Route
          path={"/TelaListaCronogramas"}
          exact={true}
          component={(props) => <TelaListaCronogramas {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
