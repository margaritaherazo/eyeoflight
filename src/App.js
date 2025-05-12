import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Therapies from './pages/Therapies';
import Learn from './pages/Learn';
import Meditations from './pages/Meditations';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/therapies" element={<Therapies />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/meditations" element={<Meditations />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </Router>
  );
}

export default App;
