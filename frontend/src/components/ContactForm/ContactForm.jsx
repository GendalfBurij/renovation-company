import React, { useState } from 'react';
import './ContactForm.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo-urbanovo.png';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [menuOpen, setMenuOpen] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mdkedrev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Ошибка отправки');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="contact-section">
      <nav className="hero-menu">
        <Link to="/" className="logo">
          <img src={logoImg} alt="Urbanovo" className="logo-img" />
        </Link>
        <div className="menu-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenyas">Reseñas</Link>
        </div>
        <FaBars className="burger-menu" onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && (
          <div className="menu-mobile">
            <Link to="/servicios" onClick={() => setMenuOpen(false)}>Servicios</Link>
            <Link to="/contacto" onClick={() => setMenuOpen(false)}>Contacto</Link>
            <Link to="/resenyas" onClick={() => setMenuOpen(false)}>Reseñas</Link>
          </div>
        )}
      </nav>
      <h2>¡Haznos una pregunta!</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar'}
        </button>
        
        {status === 'success' && (
          <p className="success-message">¡Mensaje enviado con éxito!</p>
        )}
        {status === 'error' && (
          <p className="error-message">Error al enviar. Inténtalo de nuevo.</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
