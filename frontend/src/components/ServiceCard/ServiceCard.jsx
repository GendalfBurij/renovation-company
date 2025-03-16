import React from 'react';
import { Link } from 'react-router-dom'; // Добавить импорт
import './ServiceCard.css';


const ServiceCard = ({ title, description, icon }) => {
  return (
    <article className="service-card">
      <div className="card-inner">
        <div className="card-front">
          <img src={icon} alt={title} className="service-icon" />
          <h3>{title}</h3>
        </div>
        <div className="card-back">
          <p>{description}</p>
          <Link to="/contacto" className="details-button">Saber Mas</Link>
        </div>
        <div className="content-wrapper" style={{ maxWidth: '1200px', margin: '0 auto' }}></div>
      </div>
    </article>
  );
};
console.log('ServiceCard is rendering');


export default ServiceCard;
