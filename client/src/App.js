import "./App.css";
import Navbar from "./components/navbar/navbar";
// import logo from "./logo.svg";
import React, { useState } from 'react';
import {
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage';

const App = () => {
  return (
    <Routes>
        <Route path='/'  element={<Homepage navigate={ useNavigate() }/>}/>
    </Routes>
  );
}

export default App;
