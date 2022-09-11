import React from 'react';
import Navbar from './components/common/Navbar'
import Home from './components/screen/Home';
import Profile from './components/screen/Profile';
import Login from './components/screen/Login';
import SignUp from './components/screen/SignUp';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
