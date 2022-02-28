import React from 'react';
import './index.css';
import styled from 'styled-components';
import Login from './Pages/Login';
import Register from './Pages/RegisterPage'; 
import Main from './Pages/MainPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
      <Router>
        <Routes>
        
          <Route path="/*" element={<Login />}></Route>
           
          <Route path="/RegisterPage" element={<Register />}></Route>

          <Route path="/MainPage" element={<Main />}></Route> 

       </Routes>
      </Router>
  )
}




 
