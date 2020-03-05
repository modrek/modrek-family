import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './Components/UI/Layout'
import MainBody from './Components/UI/MainBody';
import Communities from './Components/PublicUser/Communities/Communities';
import Alerts from './Components/PublicUser/Alerts/Alerts';
import Events from './Components/PublicUser/Events/Events';
import { Route, Switch, withRouter, Redirect ,BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="container-full ">
     
      <BrowserRouter>
        <Layout/>    
        <Switch>
                    <Route path="/Community" component={Communities} />   
                    <Route path="/Alerts" component={Alerts} />   
                    <Route path="/Events" component={Events} />   
                    
                    <Route path="/" component={MainBody} />         
         </Switch>         
        {/* <MainBody/> */}
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
