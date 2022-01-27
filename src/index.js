import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Product from "./components/Product";
import Cart from "./components/Cart";
import About from "./components/About";
import Room from "./components/Room";
import NotFound from "./components/NotFound";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/all-products" element={<Room />} />
        <Route path="/:room" element={<Room />} />
        <Route path="/:room/:product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
