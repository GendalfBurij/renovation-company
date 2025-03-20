import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import './components/ServiceCard/ServiceCard.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/resenyas" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
}

export default App;


