import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import AnnouncementModal from './components/AnnouncementModal';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <AnnouncementModal />
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 Lee Family Clinic Pte Ltd. All rights reserved.</p>
          <p>Big or Small, We Care for All!</p>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;