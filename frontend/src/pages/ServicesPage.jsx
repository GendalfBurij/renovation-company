import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ServiceCard from '../components/ServiceCard/ServiceCard';
import repairIcon1 from '../assets/tiler-working-renovation-apartment.jpg';
import repairIcon2 from '../assets/colorful-flower-garden.jpg';
import repairIcon3 from '../assets/closeup-shot-female-using-paint-rollers-with-color-blue.jpg';
import repairIcon4 from '../assets/high-angle-contractor-painting-house-wall.jpg';
import repairIcon5 from '../assets/full-shot-men-high-five-office.jpg';
import '../components/ServiceCard/ServiceCard.css';

const ServicesPage = () => {
  const serviceListRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollStep = 350; // Оптимальный шаг прокрутки

  const handlePrev = () => serviceListRef.current?.scrollBy({ 
    left: -scrollStep, 
    behavior: 'smooth' 
  });

  const handleNext = () => serviceListRef.current?.scrollBy({ 
    left: scrollStep, 
    behavior: 'smooth' 
  });

  return (
    <section className="services-page">
      <nav className="hero-menu">
        <Link to="/" className="logo">Repair.cat</Link>
        <div className="menu-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenyas">Reseñas</Link>
        </div>
        <FaBars 
          className="burger-menu" 
          onClick={() => setMenuOpen(!menuOpen)}
          color="#ff7300" 
        />

        {menuOpen && (
          <div className="menu-mobile">
            <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link to="/resenyas" onClick={() => setMenuOpen(false)}>Reseñas</Link>
          </div>
        )}
      </nav>

      <div className="content-wrapper">
        <h2 className="services-title">Nuestros Servicios</h2>
        
        <div className="carousel-controls">
          <button onClick={handlePrev} aria-label="Previous">
            <FaChevronLeft className="control-icon" />
          </button>
          <button onClick={handleNext} aria-label="Next">
            <FaChevronRight className="control-icon" />
          </button>
        </div>

        <div className="service-list" ref={serviceListRef}>
        <ServiceCard 
          title="Reformas Integrales" 
          description="Renovamos tu hogar con calidad y atención al detalle. Servicio llave en mano." 
          icon={repairIcon1} 
        />

        <ServiceCard 
          title="Diseño de Paisajismo" 
          description="Creamos espacios exteriores armoniosos y sostenibles con un diseño innovador." 
          icon={repairIcon2} 
        />

        <ServiceCard 
          title="Acabados y Decoración" 
          description="Aplicamos materiales de vanguardia para transformar interiores con estilo y funcionalidad." 
          icon={repairIcon3} 
        />

        <ServiceCard 
          title="Pintura Profesional" 
          description="Usamos técnicas modernas y materiales de calidad para un acabado perfecto y duradero." 
          icon={repairIcon4} 
        />

        <ServiceCard 
          title="Mantenimiento de Espacios" 
          description="Cuidamos áreas públicas y privadas para mantener su belleza y funcionalidad." 
          icon={repairIcon5} 
        />

        </div>
      </div>
    </section>
  );
};

export default ServicesPage;