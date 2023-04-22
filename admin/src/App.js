import React from 'react';
import './App.css';
import Navbar2 from './components/navigation/Navbar2';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
