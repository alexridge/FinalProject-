import "./App.css";
 import Footer from "./components/footer/footer";
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
    <div className="page-container"> 
    <div className="content-wrap"> 
    <Routes>
       <Route path='/'  element={<Homepage navigate={ useNavigate() }/>}/>
    </Routes>
    </div>
    </div>
    
  );
}

export default App;
