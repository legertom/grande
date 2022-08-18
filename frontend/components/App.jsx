// import GreetingContainer from "./greeting/greeting_container";

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
//import Modal from "./modal/modal";

const App = () => {
  return (
    <div>
      {/* <Modal /> */}
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
