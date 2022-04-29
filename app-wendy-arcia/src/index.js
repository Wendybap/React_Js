import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCoo3sdpY-hniLZZ_GWJiapASJErBBcWZ8",
  authDomain: "app-wendy-arcia.firebaseapp.com",
  projectId: "app-wendy-arcia",
  storageBucket: "app-wendy-arcia.appspot.com",
  messagingSenderId: "733095846701",
  appId: "1:733095846701:web:d2b5a006365681b147a9a4",
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
