import './App.css';
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
