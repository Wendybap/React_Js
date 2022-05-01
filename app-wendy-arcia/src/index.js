import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
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
