import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeNav } from "./screens/Home";
import { Login } from "./screens/Home/components/Login";
import { CronogramaForm } from "./screens/CronogramaForm";
import { CronogramaView } from "./screens/CronogramaView";
import { Registrar } from "./screens/Home/components/Registrar";
import { Home } from "./screens/Home/components/Home";
import { Cronogramas } from "./screens/Cronogramas";

const isAuthenticated = async () => await localStorage.getItem("accessToken")

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from={"/"} exact={true} to={isAuthenticated ? "/login" : "/login"} />
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
          path={"/cronogramaview/:id"}
          exact={true}
          component={(props) => <CronogramaView {...props} />}
        />
        <Route
          path={"/create/cronograma"}
          exact={true}
          component={(props) => <CronogramaForm {...props} />}
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

      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
