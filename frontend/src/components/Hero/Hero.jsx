import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Hero.css';
import { FaBars } from 'react-icons/fa'; // Иконка для меню-бургера
// import heroImage from '../../assets/icono-3d-campo-construccion.png';
import repairIcon from '../../assets/jardinero_icono.png';
import logoImg from '../../assets/logo-urbanovo.png';
import icon1 from '../../assets/espacios-reales.png';
import icon2 from '../../assets/soluciones-pensadas.png';
import icon3 from '../../assets/un-solo-equipo.png';
import icon4 from '../../assets/estética-con-criterio.png';
import icon5 from '../../assets/Detalles-que-otros-ignoran.png';
import icon6 from '../../assets/Comunicación-clara-y-directa.png';
import heroGif from '../../assets/urbanovo-animated.gif';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <section className="hero-section">
        <nav className="hero-menu">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Urbanovo" className="logo-img" />
          </Link>

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
            {/* <img src={heroImage} alt="Construcción y diseño" className="hero-image" /> */}
            <img src={heroGif} alt="Animación Urbanovo" className="hero-image" />
          </div>

          {/* Контент справа */}
          <div className="hero-content">
          {/* <h1 className="fade-in">URBANOVO - Soluciones claras, acabados perfectos.</h1> */}
          <p className="fade-in-delayed">
            {/* Urbanovo es una empresa especializada en el mantenimiento y mejora de espacios residenciales y públicos. 
            Realizamos pintura de fachadas y muros, aplicación de yeso, colocación de piedra decorativa, poda de setos y olivos, corte de césped e instalación de riego automático. 
            Comprometidos con la calidad, el detalle y la transformación visible. */}
            <p className="fade-in-delayed">
              Urbanovo es una empresa ubicada en Tarragona especializada en el mantenimiento de jardines, pintura de fachadas y reformas de interiores. <br />
              Nuestro equipo de jardineros, pintores y aplicadores de yeso trabaja en Tarragona, Reus, Cambrils, Salou y zonas cercanas. <br />
              Ofrecemos poda de olivos y setos, corte de césped, instalación de sistemas de riego automático, pintura exterior e interior, y acabados detallados para todo tipo de espacios.
            </p>
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
            {/* Преимущество 1 */}
            <div className="benefit-card">
              <img src={icon1} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Trabajamos con espacios reales</h3>
                <p>Sabemos cómo se vive un jardín, una fachada o un patio.
                No ofrecemos belleza abstracta: buscamos funcionalidad, orden y estética que encajan en la vida cotidiana.
                </p>
              </div>
            </div>
            
            {/* Преимущество 2 */}
            <div className="benefit-card">
              <img src={icon2} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Soluciones pensadas, no improvisadas</h3>
                <p>Cada proyecto se adapta al espacio, al clima y al uso real.
                  No hacemos “lo de siempre”. Pensamos cada detalle para que el resultado sea duradero, útil y coherente.
                </p>
              </div>
            </div>
            
            {/* Преимущество 3 */}
            <div className="benefit-card">
              <img src={icon3} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Un solo equipo, todos los servicios</h3>
                <p>Pintura, jardinería, yeso, piedra decorativa, riego automático… todo en manos de un mismo equipo.
                  Evitas tratar con múltiples proveedores. Asumimos todo el trabajo y toda la responsabilidad.
                </p>
              </div>
            </div>

            {/* Преимущество 4 */}
            <div className="benefit-card">
              <img src={icon4} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Estética con criterio</h3>
                <p>Sabemos cuándo una pared necesita color… y cuándo solo limpieza.
                  No vendemos lo innecesario. Apostamos por el buen gusto, el equilibrio y el respeto por el espacio. 
                </p>
              </div>
            </div>

            {/* Преимущество 5 */}
            <div className="benefit-card">
              <img src={icon5} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Detalles que otros ignoran</h3>
                <p>Líneas limpias, cortes precisos, acabados cuidados.
                  Lo que parece “pequeño” es lo que marca la diferencia. Por eso cuidamos cada rincón como si fuera el centro.
                </p>
              </div>
            </div>

            {/* Преимущество 6 */}
            <div className="benefit-card">
              <img src={icon6} className="benefit-icon" alt="Experiencia" />
              <div className="benefit-text">
                <h3>Comunicación clara y directa</h3>
                <p>Te decimos lo que haremos, cómo y cuándo — y lo cumplimos.
                  Nada de sorpresas. Presupuestos reales, tiempos claros y compromiso total.
                </p>
              </div>
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
                <li>🌿 Diseño de paisajismo y mantenimiento verde</li>
                <li>🎨 Rehabilitación estética y funcional de espacios</li>
                <li>⚡ Instalaciones funcionales y mejoras técnicas</li>
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
