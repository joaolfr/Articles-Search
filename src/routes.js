import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Detail} path="/detail" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
