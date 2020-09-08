import React, { Component } from "react";
import Layout from "./components/Layout";
import { Route, Redirect, Switch } from "react-router-dom";
import Board from "./containers/Board/Board";
import "./App.css";

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Board} />
        <Redirect to="/" />
      </Switch>
    );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

export default App;
