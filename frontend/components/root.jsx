// import React from "react";
// import { Provider } from "react-redux";
// import { Router, Route, IndexRoute, hashHistory } from "react-router";

// import SessionFormContainer from "./session_form_container";
// import SearchContainer from "./map/search_container";
// import App from "./app";

// const _redirectIfLoggedIn = (nextState, replace, asyncDoneCallback) => {
//   if (window.currentUser) {
//     replace("/");
//   }
// };

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <Router history={hashHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={SearchContainer} />
//         <Route
//           path="/login"
//           component={SessionFormContainer}
//           onEnter={_redirectIfLoggedIn}
//         />
//         <Route
//           path="/signup"
//           component={SessionFormContainer}
//           onEnter={_redirectIfLoggedIn}
//         />
//       </Route>
//     </Router>
//   </Provider>
// );

// export default Root;

import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import {RecoilRoot} from 'recoil'
import App from "./App";
import StateContextProvider from "../context/StateContextProvider";
const Root = ({ store }) => {
  return (
    <Provider store={store}>
    <RecoilRoot>
      <HashRouter>
      <StateContextProvider>
        <App />
        </StateContextProvider>
      </HashRouter>
      </RecoilRoot>
    </Provider>
  );
};

export default Root;
