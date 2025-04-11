import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import YouTubeIcon from '../../assets/youtube_icon.png';
import InstagramIcon from '../../assets/instagram_icon.png';
import WhatsAppIcon from '../../assets/twitter_icon.png';
import logoImg from '../../assets/logo-urbanovo.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        {/* Блок бренда и соцсетей */}
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src={logoImg} alt="Urbanovo" className="logo-img" />
          </Link>
          <p className="brand-description">Reparación rápida en Tarragona y cercanias desde 2022.</p>
          <div className="social-media">
            <a href="https://youtube.com/repair.cat" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt="YouTube" />
            </a>
            <a href="https://instagram.com/repair.cat" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a href="https://wa.me/34123456789" target="_blank" rel="noopener noreferrer">
                <img src={WhatsAppIcon} alt="WhatsApp" />
            </a>
          </div>
        </div>

        {/* Блок услуг */}
        <div className="footer-section">
          <h4>Nuestros servicios</h4>
          <nav className="footer-nav">
            <Link to="/servicios">Reformas integrales</Link>
            <Link to="/servicios">Diseño de paisajismo</Link>
            <Link to="/servicios">Pintura profesional</Link>
          </nav>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="contact-info">
            <p>📞 +34 628 053 853</p>
            <p>✉️ urbanovo.contact@gmail.com</p>
            <p>📍 Cambrils</p>
          </div>
        </div>

        {/* Подписка на рассылку */}
        <div className="footer-section">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">Suscribir</button>
          </form>
        </div>
      </div>

      {/* Нижняя часть футера */}
      <div className="footer-bottom">
        <div className="legal-links">
        <a 
            href="https://www.privacypolicies.com/live/4f545db6-3afa-4a2b-97a0-2aaf610ec858" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Política de privacidad
        </a>
        <a 
            href="https://www.termsfeed.com/live/7413816a-1cda-44c5-b880-3f74972f45fb" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Términos de servicio
        </a>
          <Link to="/#hero">Sobre nosotros</Link>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Repair.cat. Todos los derechos reservados. Diseñado por filippmazein@gmail.com
        </p>
      </div>

      {/* Кнопка "Наверх" */}
      <button 
        className="scroll-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Volver arriba"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;