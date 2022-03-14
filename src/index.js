// React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Elements
import App from "./components/App";
import "./components/css/App.css";

ReactDOM.render(
  <React.StrictMode >
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);