import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './Components/UI/Layout'
import MainBody from './Components/UI/MainBody';
import Communities from './Components/PublicUser/Communities/Communities';
import Alerts from './Components/PublicUser/Alerts/Alerts';
import Events from './Components/PublicUser/Events/Events';
import  UserBoard from './Components/PublicUser/UserBoard/UserBoard';
import  Ads from './Components/PublicUser/Ads/Ads';
import Wall from './Components/PublicUser/Wall/Wall'
import Accounts from './Components/UI/Accounts/Accounts'
import Help from './Components/UI/Help/Help'
import Language from './Components/UI/Language/Language'
import Manage from './Components/UI/Manage/Manage'
import PostAndActivity from './Components/UI/PostAndActivity/PostAndActivity'
import Privacy from './Components/UI/Privacy/Privacy'
import Login from './Components/UI/Accounts/Login/Login'
import { Route, Switch, withRouter, Redirect ,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="container-full ">
     
      <BrowserRouter>
        <Layout/>    
        <div className="d-flex p-2">
        <UserBoard/>
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
                    <Route path="/" component={Wall} />         
         </Switch>   
         </div>      
         <Ads></Ads>        
        </div>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
