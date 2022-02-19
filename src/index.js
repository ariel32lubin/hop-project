import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostGig from "./pages/PostGig";
import StaffGig from "./pages/StaffGig";
import GigDetails from "./pages/GigDetails";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="PostGig" element={<PostGig />} />
        <Route path="StaffGig" element={<StaffGig />} />
        <Route path="GigDetails" element={<GigDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
