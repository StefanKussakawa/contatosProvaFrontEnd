import './App.css';
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreateContact from './pages/CreateContact';
import CreateUser from './pages/CreateUser';
import Login from './pages/Login';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={CreateUser}/>
          <Route exact path="/register" component={Login}/>
          <Route path="/account" component={MainPage}/>
          <Route path="/add" component={CreateContact}/>
        </Switch>
      </React.Fragment>
    );
  }
}


