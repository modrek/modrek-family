import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './Components/UI/Layout'
import MainBody from './Components/UI/MainBody';
import Communities from './Components/PublicUser/Communities/Communities';
import Alerts from './Components/PublicUser/Alerts/Alerts';
import Events from './Components/PublicUser/Events/Events';
import UserBoard from './Components/PublicUser/UserBoard/UserBoard';
import Ads from './Components/PublicUser/Ads/Ads';
import Wall from './Components/PublicUser/Wall/Wall'
import Accounts from './Components/UI/Accounts/Accounts'
import Help from './Components/UI/Help/Help'
import Language from './Components/UI/Language/Language'
import Manage from './Components/UI/Manage/Manage'
import PostAndActivity from './Components/UI/PostAndActivity/PostAndActivity'
import Privacy from './Components/UI/Privacy/Privacy'
import Login from './Components/UI/Accounts/Login/Login'
import { Route, Switch, withRouter, Redirect, BrowserRouter } from 'react-router-dom';
import * as Auth from './Components/UI/Accounts/Login/Auth';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store)
  let content = <div className="App">
    <div className="container-full ">

      <BrowserRouter>
        <Layout />
        <div className="d-flex p-2">

          <div className="mainbody col-8 d-flex">
            <Switch>
              <Route path="/" component={Login} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    </div>
  </div>

  if (!store.userToken) {
    store.userToken = localStorage.getItem('token');
  }
  // console.log(store.userToken);

  if (store.userToken) {
    content = <div className="App">
      <div className="container-full ">

        <BrowserRouter>
          <Layout />
          <div className="d-flex p-2">
            <UserBoard />
            <div className="mainbody col-8 d-flex">
              <Switch>
                <Route path="/Community" component={Communities} />
                <Route path="/Alerts" component={Alerts} />
                <Route path="/Events" component={Events} />
                <Route path="/Accounts" component={Accounts} />
                <Route path="/Help" component={Help} />
                <Route path="/Language" component={Language} />
                <Route path="/Manage" component={Manage} />
                <Route path="/Login" component={Login} />
                <Route path="/PostAndActivity" component={PostAndActivity} />
                <Route path="/Privacy" component={Privacy} />
                <Route path="/" exact component={Wall} />
              </Switch>
            </div>
            <Ads></Ads>
          </div>
        </BrowserRouter>
      </div>
    </div>
  }

  return (
    <>
      {content}
    </>
  )
}


export default App;
