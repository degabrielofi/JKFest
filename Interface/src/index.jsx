import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import About from "pages/About";
import Gallery from "pages/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
