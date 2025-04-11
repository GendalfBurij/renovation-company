// import reviewImg1 from '../assets/colorful-flower-garden.jpg';
// import reviewImg2 from '../assets/colorful-flower-garden.jpg';
// import reviewImg3 from '../assets/colorful-flower-garden.jpg';
// import reviewImg4 from '../assets/colorful-flower-garden.jpg';
// import reviewImg5 from '../assets/colorful-flower-garden.jpg';
// import reviewImg6 from '../assets/colorful-flower-garden.jpg';

// const reviews = [
//   { id: 1, image: reviewImg1, alt: 'Отзыв 1' },
//   { id: 2, image: reviewImg2, alt: 'Отзыв 2' },
//   { id: 3, image: reviewImg3, alt: 'Отзыв 3' },
//   { id: 4, image: reviewImg4, alt: 'Отзыв 4' },
//   { id: 5, image: reviewImg5, alt: 'Отзыв 5' },
//   { id: 6, image: reviewImg6, alt: 'Отзыв 6' },
// ];
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../components/Reviews/ReviewsPage.css';
import logoImg from '../assets/logo-urbanovo.png';
import reviewImg1 from '../assets/pared-blanca.png';
import reviewImg2 from '../assets/chimenea.png';
import reviewImg3 from '../assets/piedra-decorativa.png';
import reviewImg4 from '../assets/oliva.png';
import reviewImg5 from '../assets/setos.jpg';

const reviews = [
  {
    id: 1,
    name: 'Elena',
    title: 'Pared como nueva',
    text: 'Urbanovo realizó el lijado y la pintura de una pared exterior. Trabajo limpio, rápido y con excelentes acabados.',
    image: reviewImg1,
  },
  {
    id: 2,
    name: 'Luis',
    title: 'Decoración impecable',
    text: 'Pintaron mi chimenea con pintura decorativa. El resultado fue moderno y elegante. ¡Muy recomendable!',
    image: reviewImg2,
  },
  {
    id: 3,
    name: 'María',
    title: 'Piedra decorativa perfecta',
    text: 'Colocaron piedra decorativa en una de nuestras paredes. El cambio fue espectacular, parece otra casa.',
    image: reviewImg3,
  },
  {
    id: 4,
    name: 'Jordi',
    title: 'Olivar con estilo',
    text: 'Urbanovo hizo una poda decorativa de nuestro olivo. Ahora es el centro visual del jardín.',
    image: reviewImg4,
  },
  {
    id: 5,
    name: 'Ana',
    title: 'Setos perfectos',
    text: 'Recortaron y dieron forma a nuestra valla de setos. Precisión, rapidez y limpieza total.',
    image: reviewImg5,
  }
];


const ReviewsPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="reviews-page">
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

      <div className="reviews-section">
        <h2 className="reviews-title">¿Qué dicen nuestros clientes?</h2>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <img src={review.image} alt={review.name} className="review-avatar" />
              <h3>{review.title}</h3>
              <p className="review-text">{review.text}</p>
              <p className="review-name">{review.name}</p>
            </div>
          ))}
        </div>
        <button className="reviews-button">Ver todos los comentarios</button>
      </div>
    </section>
  );
};

export default ReviewsPage;
