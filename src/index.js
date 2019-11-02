import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginComponent from "./components/login/login";
import SignupComponent from "./components/signup/signup";
import DashboardComponent from "./components/dashboard/dashboard";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyAdctZaykHD3Gi0wJbO_h40bmT6OzDDJPo",
  authDomain: "react-chatapp-abed5.firebaseapp.com",
  databaseURL: "https://react-chatapp-abed5.firebaseio.com",
  projectId: "react-chatapp-abed5",
  storageBucket: "react-chatapp-abed5.appspot.com",
  messagingSenderId: "515944464381",
  appId: "1:515944464381:web:1e1d7ee10d077d26d6a394"
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignupComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
