import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "pages/Home";
import About from "pages/About";
import Budget from "pages/Budget";
import Gallery from "pages/Gallery";
import ItemRegistration from "components/ItemRegistration";
import ViewItems from "components/ViewItems";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/galeria" element={<Gallery />} />
        <Route path="/registro" element={<ItemRegistration />} />
        <Route path="/orcamento" element={<ViewItems />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
