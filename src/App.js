import React from 'react';
import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Login />}></Route> 
        <Route path='/Main' element={<MainPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
