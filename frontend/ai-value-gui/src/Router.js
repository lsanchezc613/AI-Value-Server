import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard/Dashboard'
import Driver from './Components/Dashboard/Drivers/Driver'

const NotFound = () => <div>Not found page</div>;

const Router = () => {
  const someVariable = true;

  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      {/* <Route
        path="/login"
        render={props => <Login />}
      />
      <Route
        path="/register"
        render={props => <Register />}
      /> */}
      <Route
        path="/dashboard"
        render={props => <Dashboard />}
      />
      <Route
        path="/driver/:id"
        render={props => <Driver />}
      />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Router;