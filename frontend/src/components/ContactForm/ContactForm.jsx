import React, { useState } from 'react';
import './ContactForm.css';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Создаем mailto ссылку
    const mailtoLink = `mailto:filippmazein@gmail.com?subject=Mensaje de ${formData.name}&body=Email: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${formData.message}`;

    // Открываем почтовый клиент пользователя
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section">
      <nav className="hero-menu">
        <Link to="/" className="logo">Repair.cat</Link>
        <div className="menu-links">
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenyas">Reseñas</Link>
        </div>
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
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default ContactForm;
