import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Weather />
    <p>
      Coded by Stepahnie Lahellec, check the open source{" "}
      <a href="https://github.com/slahel/my-app-wether-react" target="_blank">
        here
      </a>
    </p>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
