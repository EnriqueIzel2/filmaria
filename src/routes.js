import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Page404 from "./pages/Page404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
