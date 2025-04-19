import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./styles.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Covid-Spread-Data-Analysis/">
      {" "}
      {/* 👈 Needed for GH Pages */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
