import React from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/' element={<Register />} />
        
        <Route path='/Register' element={<Register />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}

      </Routes>
    
      
      
    </div>
  );
}

export default App;
