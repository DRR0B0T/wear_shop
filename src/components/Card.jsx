import React, {useState} from 'react';
import item from '../assets/img/image1.png'
import ShoppingIcon from "./ShoppingIcon";

const Card = () => {
  const [outOfStock, setOutOfStock] = useState(false);
  const [cartItem, setCartItem] = useState(false);


  return (
    <>
      {
        outOfStock
          ? <div className="card disabled">
            <img src={item} alt="Item"/>
            <h3 className="card__out">OUT OF STOCK</h3>
            <h3 className="card__name">
              Apollo Running Short
            </h3>
            <span className="card__price"> $50 </span>
          </div>
          : <div className="card">
        <img src={item} alt="Item"/>
            {cartItem ? <ShoppingIcon/> : ''}
        <h3 className="card__name">
          Apollo Running Short
        </h3>
        <span className="card__price"> $50 </span>
      </div>
      }
    </>
  );
};

export default Card;
