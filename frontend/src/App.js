import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'; //BrowserRouter для vps, HashRouter для Git
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer/Footer';
import ReviewsPage from './pages/ReviewsPage';
import './components/ServiceCard/ServiceCard.css';


const RouterComponent = process.env.REACT_APP_ENV === 'production' ? BrowserRouter : HashRouter;

function App() {
  return (
    <RouterComponent>
      <div className="page-container"> {/* Добавлено */}
        <div className="content-wrap"> {/* Добавлено */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/resenyas" element={<ReviewsPage />} />
            {/* <Route path="/politica-privacidad" element={<PrivacyPolicyPage />} />
            <Route path="/terminos" element={<TermsOfServicePage />} />
            <Route path="/sobre-nosotros" element={<AboutUsPage />} /> */}
          </Routes>
        </div>
        <Footer /> 
      </div>
    </RouterComponent>
  );
}

export default App;


