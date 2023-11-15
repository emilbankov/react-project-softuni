import React from 'react';
import './App.css'; 

const CardWithHover = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          src="https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/AcjaXqwZzggGiKLFdEfHMp0H.png"
          alt="Card"
          className="card-image"
        />
        <div className="overlay">
          <h2 className="title">Spider-Man</h2>
        </div>
      </div>
      <div className="price-container">
        <p className="price">Price: $19.99</p>
      </div>
    </div>
  );
};

export default CardWithHover;
