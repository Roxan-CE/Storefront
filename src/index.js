import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import MainPage from "./components/MainPage";
import Product from "./components/Product";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Store />} />
        <Route path="/shop/:name" element={<Product />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
