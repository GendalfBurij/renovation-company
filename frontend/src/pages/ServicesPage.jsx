import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../components/ServiceCard/ServiceCard.css';
import logoImg from '../assets/logo-urbanovo.png';

const ServicesPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="services-page">
      <nav className="hero-menu">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Urbanovo" className="logo-img" />
        </Link>

        <div className="menu-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenyas">Reseñas</Link>
        </div>
        <FaBars 
          className="burger-menu" 
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="menu-mobile">
            <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link to="/resenyas" onClick={() => setMenuOpen(false)}>Reseñas</Link>
          </div>
        )}
      </nav>

      <div className="services-content">
        <h2 className="services-title">Servicios de pintura, jardinería y reformas en Tarragona y alrededores</h2>
        <p className="services-description">
          Urbanovo ofrece soluciones completas en pintura de fachadas y muros, jardinería, reformas y aplicación de yeso en Tarragona, Reus, Cambrils, Salou y alrededores. <br />
          Nuestro equipo de pintores, jardineros y especialistas en reformas trabaja con precisión, detalle y compromiso. Ya sea pintar edificios, podar olivos o transformar un patio, lo hacemos con excelencia.
        </p>

        {/* Блок видео YouTube */}
        <div className="video-block">
          <div className="video-wrapper">
            <iframe
              src="https://youtu.be/rFEqIkSkI34?si=9j812jzFZXW0YQsu"
              title="Urbanovo video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Список категорий и услуг */}
        <div className="services-grid">
          <div className="service-category">
            <h3>🛠️ Reformas y acabados exteriores</h3>
            <ul>
              <li>Pintura de muros y fachadas</li>
              <li>Aplicación de yeso y acabados finos</li>
              <li>Colocación de piedra decorativa</li>
              <li>Pulido y pintura de estructuras metálicas</li>
              <li>Reparaciones menores en exteriores</li>
              <li>Limpieza y mantenimiento de superficies</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>⚡ Instalaciones funcionales</h3>
            <ul>
              <li>Instalación y extensión de enchufes</li>
              <li>Instalación de sistemas de riego automático</li>
              <li>Adecuación de espacios comunes y públicos</li>
              <li>Trabajos personalizados según necesidad</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>🌿 Paisajismo y mantenimiento verde</h3>
            <ul>
              <li>Poda de setos, olivos y arbustos</li>
              <li>Corte y mantenimiento de césped</li>
              <li>Retiro de hojas y mantenimiento estacional</li>
              <li>Limpieza general de jardines</li>
            </ul>
          </div>

          <div className="service-category">
            <h3>🎨 Rehabilitación estética y funcional</h3>
            <ul>
              <li>Intervenciones integrales para fachadas</li>
              <li>Mejora visual de zonas comunitarias</li>
              <li>Proyectos combinados: pintura, jardinería</li>
              <li>Transformación de espacios sin obras</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
