import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';

import "./App.css"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="*" component={Error404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;