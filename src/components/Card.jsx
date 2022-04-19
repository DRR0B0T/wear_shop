import React from 'react';
import item from '../assets/img/image4.png'

const Card = () => {
  return (
    <div className="card disabled" >
      <img src={item} alt="Item"/>
      <h3 className="card__name">
        Apollo Running Short
      </h3>
      <span className="card__price"> $50 </span>
    </div>
  );
};

export default Card;
