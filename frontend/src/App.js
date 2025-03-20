import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'; //BrowserRouter для vps, HashRouter для Git
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import './components/ServiceCard/ServiceCard.css';

const RouterComponent = process.env.REACT_APP_ENV === 'production' ? BrowserRouter : HashRouter;

function App() {
  return (
    <RouterComponent>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/resenyas" element={<PortfolioPage />} />
      </Routes>
    </RouterComponent>
  );
}

export default App;


