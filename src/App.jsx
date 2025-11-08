import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {renderPage()}
      </main>
      <footer>
        <p>&copy; 2025 Lee Family Clinic Pte Ltd. All rights reserved.</p>
        <p>Big or Small, We Care for All!</p>
      </footer>
    </div>
  );
}

export default App;