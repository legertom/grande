/// import GreetingContainer from "./greeting/greeting_container";

// const App = () => (
//   <div>
//     <header>
//       <h1>Tom's Grande (app.jsx)</h1>
//       <GreetingContainer />
//     </header>
//   </div>
// );

import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Splash from "./splash/splash";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {useStateValue} from '../context/StateContextProvider'
import Home from '../components/home'
import Sidebar from "./sideBar";
import './App.css'
//import Modal from "./modal/modal";

const App = () => {
  const [{user}, dispatch] = useStateValue()
  console.log("User========",user)
  return (
    <div className="app">
    
      {/* //<Modal /> */}
      {user ?
        <div className="app__mainContent">
        <Sidebar />
      <Switch>
        <AuthRoute exact path="/" component={Home} />
      </Switch>
      </div>
      :
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
      }
    </div>
  );
};

export default App;
