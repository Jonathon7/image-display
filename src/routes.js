import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/gallery/Gallery";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/gallery" component={Gallery} />
  </Switch>
);
