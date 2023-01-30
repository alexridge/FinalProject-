import logo from './logo.svg';
import Homepage from "./pages/homepage";
import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Homepage navigate={ useNavigate()}/>}/>
  </Routes>
  )
}

export default App;
