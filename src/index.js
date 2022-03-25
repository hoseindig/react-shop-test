import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

import App from "./App";
ReactDOM.render(
  <BrowserRouter>
    <ToastContainer position="bottom-right" />

    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
