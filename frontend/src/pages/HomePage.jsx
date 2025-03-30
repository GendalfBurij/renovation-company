
import React, { useEffect } from 
'react';
import Hero from '../components/Hero/Hero';  

const HomePage = () => {
  useEffect(() => {
    fetch('http://13.60.185.244:8000/')
      .then(response => response.json())
      .then(data => console.log(data.message))
      .catch(error => console.error('Error:', error));
  }, []); 

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
