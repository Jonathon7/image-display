import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Router>{routes}</Router>
      </div>
    );
  }
}

export default App;
