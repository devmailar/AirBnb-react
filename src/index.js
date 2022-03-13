// React and ReactDOM
import React from "react";
import ReactDOM from "react-dom";

// Elements
import Header from "./components/Header";
import "./components/css/App.css";

ReactDOM.render(
  <React.StrictMode >
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);