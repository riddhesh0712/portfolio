import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Template/Navbar';
import Home from './pages/Home.jsx';
import Portfolios from './pages/Portfolios.jsx';
import { Blogs } from './pages/Blogs.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Portfolios" element={<Portfolios />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Routes>
      </div>
  );
}

export default App;