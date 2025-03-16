import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Hero.css';
import { FaBars } from 'react-icons/fa'; // Иконка для меню-бургера
import heroImage from '../../assets/icono-3d-campo-construccion.png';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hero-section">
      <nav className="hero-menu">
        <Link to="/" className="logo">Repair.cat</Link>

        {/* Обычное меню для ПК */}
        <div className="menu-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenyas">Reseñas</Link>
        </div>

        {/* Бургер-меню (только для мобильных) */}
        <FaBars className="burger-menu" onClick={() => setMenuOpen(!menuOpen)} />

        {menuOpen && (
          <div className="menu-mobile">
            <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link to="/resenyas" onClick={() => setMenuOpen(false)}>Reseñas</Link>
          </div>
        )}
      </nav>

      <div className="hero-container">
        {/* Изображение слева */}
        <div className="hero-image-container">
          <img src={heroImage} alt="Construcción y diseño" className="hero-image" />
        </div>

        {/* Контент справа */}
        <div className="hero-content">
          <h1>Transformamos Espacios con Calidad y Diseño</h1>
          <p>Especialistas en reformas, diseño de interiores y paisajismo. 
            Convertimos tu visión en realidad con materiales de alta calidad y un equipo experto.</p>
          <Link to="/servicios" className="hero-button">Nuestros Servicios</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
