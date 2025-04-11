import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const ContactPage = () => {
  return (
    <section className="contact-page">
      <div className="contact-wrapper">
        <div className="contact-image-desktop"></div>
        <div className="contact-image-mobile"></div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;