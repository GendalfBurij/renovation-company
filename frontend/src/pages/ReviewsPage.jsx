import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Импорт иконки бургера
import '../components/Reviews/ReviewsPage.css';

import reviewImg1 from '../assets/colorful-flower-garden.jpg';
import reviewImg2 from '../assets/colorful-flower-garden.jpg';
import reviewImg3 from '../assets/colorful-flower-garden.jpg';
import reviewImg4 from '../assets/colorful-flower-garden.jpg';
import reviewImg5 from '../assets/colorful-flower-garden.jpg';
import reviewImg6 from '../assets/colorful-flower-garden.jpg';

const reviews = [
  { id: 1, image: reviewImg1, alt: 'Отзыв 1' },
  { id: 2, image: reviewImg2, alt: 'Отзыв 2' },
  { id: 3, image: reviewImg3, alt: 'Отзыв 3' },
  { id: 4, image: reviewImg4, alt: 'Отзыв 4' },
  { id: 5, image: reviewImg5, alt: 'Отзыв 5' },
  { id: 6, image: reviewImg6, alt: 'Отзыв 6' },
];

const ReviewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const showSlide = (index) => {
    if (index >= reviews.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(reviews.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="reviews-page">
      {/* Добавленное меню */}
      <nav className="hero-menu">
        <Link to="/" className="logo">Repair.cat</Link>

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

      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {reviews.map((review) => (
              <div key={review.id} className="carousel-item">
                <img src={review.image} alt={review.alt} />
              </div>
            ))}
          </div>
          <div className="carousel-control">
            <button className="prev" onClick={() => showSlide(currentIndex - 1)}>&lt;</button>
            <button className="next" onClick={() => showSlide(currentIndex + 1)}>&gt;</button>
          </div>
        </div>
        <div className="text-content">
          <h1>Reseñas</h1>
          <p>
            Estamos orgullosos de ayudar a nuestros clientes a encontrar respuestas a preguntas importantes y superar momentos difíciles. 
            Todos nuestros clientes quedaron satisfechos con los resultados y están felices de recomendarnos a sus amigos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
