import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero/Hero';  


const HomePage = () => {
  // const [apiMessage, setApiMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, [setApiMessage]);

  return (
    <>
      <Hero />
      <div className="home-content">
        {/* <p>{apiMessage}</p> */}
      </div>
    </>
  );
};

export default HomePage; 