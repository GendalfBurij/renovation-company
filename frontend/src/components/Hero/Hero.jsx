import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Hero.css';
import { FaBars } from 'react-icons/fa'; // Иконка для меню-бургера
import heroImage from '../../assets/icono-3d-campo-construccion.png';
import repairIcon from '../../assets/jardinero_icono.png';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
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
          <h1 className="fade-in">Renovamos tu hogar sin estrés</h1>
          <p className="fade-in-delayed">
            Reformas integrales, diseño de paisajismo y fachadas con garantía y puntualidad. 
            Más de 10 años trabajando en toda Cataluña.
          </p>
          <div className="hero-buttons fade-in-delayed">
            <Link to="/servicios" className="hero-button secondary">Nuestros Servicios</Link>
            <Link to="/contacto" className="hero-button secondary">Pide Presupuesto</Link>
          </div>
          </div>
        </div>
        
      </section>
      {/* Секция преимуществ */}
      <section className="benefits-section">
        <div className="benefits-container">
        <h2>¿Por qué elegirnos?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>🏆 +5 Años de Experiencia</h3>
              <p>Más de 200 proyectos completados con éxito</p>
            </div>
            <div className="benefit-card">
              <h3>✅ Garantía Escrita</h3>
              <p>Materiales certificados y profesionales cualificados</p>
            </div>
            <div className="benefit-card">
              <h3>🕒 Puntualidad</h3>
              <p>98% de entregas a tiempo según cronograma</p>
            </div>
          </div>
        </div>
      </section>

      {/* Секция CTA с изображением справа */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-content reversed">
            <div className="about-text">
              <h2>Expertos en Transformación de Espacios</h2>
              <ul className="services-list">
                <li>🛠️ Reformas y acabados de interiores con alto nivel de detalle</li>
                <li>🌿 Diseño de paisajismo y mantenimiento de setos y jardines</li>
                <li>🎨 Rehabilitación estética y funcional de fachadas</li>
                <li>🏗️ Mejora y mantenimiento de espacios públicos y comunitarios</li>
              </ul>
              <Link to="/servicios" className="cta-button">
                Ver servicios
                <svg className="arrow-icon" viewBox="0 0 24 24">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
                </svg>
              </Link>

            </div>
            <img 
              src={repairIcon} 
              alt="Nuestro equipo" 
              className="about-image"
            />
          </div>
        </div>
      </section>

      {/* Секция отзывов */}
      <section className="reviews-cta">
      <div className="cta-container">
          <div className="cta-content">
            <h2>¿Qué dicen nuestros clientes?</h2>
            <p>Más de 200 clientes satisfechos en toda Cataluña</p>
          </div>
          <Link to="/resenyas" className="cta-button">
            Ver reseñas
            <svg className="arrow-icon" viewBox="0 0 24 24">
              <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
            </svg>
          </Link>
        </div>
      </section>
    </div>
    
  );
};

export default Hero;
