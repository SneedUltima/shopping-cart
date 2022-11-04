import React from 'react';
import '../styles/ItemCard.css';
import { useContext } from 'react';
import ShoppingCartContext from './ShoppingCartContext';

const ItemCard = ({ id, name, price, imgUrl }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  return (
    <div className="item-card">
      <div className="image-container">
        <img src={imgUrl} alt="Preworkout Image" id="item-image" />
      </div>
      <div className="text-container">
        <p id="item-title">{name}</p>
        <p id="item-price">${price}</p>
        <button id="item-button" onClick={() => addToCart(id, name, price)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
