import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter, Switch, Route } from "react-router-dom"
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import Nav from './components/Nav';
import UserContextProvider from './components/UserContextProvider';

import "./App.css"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserContextProvider>
        <Nav />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="*" component={Error404} />
        </Switch>
        </UserContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;