import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import Search from "./Components/Search/Search";

import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
