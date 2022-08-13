import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import {EntertainProvider} from '../src/Context/EntertainContext';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details/Details";
import Search from "./Components/Search/Search";

const App = () => {
  return (
    <EntertainProvider>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Details/>}/>
    </Routes>
    </BrowserRouter>
    </EntertainProvider>
  );
};

export default App;
