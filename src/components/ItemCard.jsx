import React from 'react';
import '../styles/ItemCard.css';

const ItemCard = ({ id, name, price, imgUrl }) => {
  return (
    <div className="item-card">
      <div className="image-container">
        <img src={imgUrl} alt="Preworkout Image" id="item-image" />
      </div>
      <div className="text-container">
        <p id="item-title">{name}</p>
        <p id="item-price">${price}</p>
        <button id="item-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemCard;
