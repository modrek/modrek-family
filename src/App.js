import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Layout from './Components/UI/Layout'
import MainBody from './Components/UI/MainBody';
import Community from './Components/PublicUser/Communities/Communities';
import { Route, Switch, withRouter, Redirect ,BrowserRouter } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



function App() {
  return (
    <div className="App">
      <div className="container-full ">
     
      <BrowserRouter>
      <Layout/>
      <Switch>
          <Route path="/Community" component={Community} />         
          <Redirect to="/" />
        </Switch>
        </BrowserRouter>
      <MainBody/>
      </div>
    </div>
  );
}

export default App;
