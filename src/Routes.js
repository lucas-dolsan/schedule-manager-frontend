import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { HomeNav } from "./screens/Home";
import { Login } from "./screens/Home/components/Login";
import { CrudCronograma } from "./components/Home/components/CrudCronograma";
import { Registrar } from "./screens/Home/components/Registrar";
import { Home } from "./screens/Home/components/Home";
import { Cronogramas } from "./screens/Cronogramas";
import { TelaListaCronogramas } from "./screens/Home/components/TelaListaCronogramas"

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
          path={"/crudcronograma"}
          exact={true}
          component={(props) => <CrudCronograma {...props} />}
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
          component={(props) => null}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
