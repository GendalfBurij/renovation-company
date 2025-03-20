import React, { useState } from 'react';
import '.src/components/Reviews/ReviewsPage.css';

const reviews = [
  { id: 1, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 1' },
  { id: 2, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 2' },
  { id: 3, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 3' },
  { id: 4, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 4' },
  { id: 5, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 5' },
  { id: 6, image: '/assets/colorful-flower-garden.jpg', alt: 'Отзыв 6' },
];

const ReviewsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <h1>Отзывы</h1>
          <p>
            Мы гордимся тем, что можем помочь нашим клиентам находить ответы на важные вопросы и преодолевать трудные моменты. 
            Все наши клиенты остались довольны результатами и рады рекомендовать нас своим друзьям.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
