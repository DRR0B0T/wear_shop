import React from 'react';
import img from "../assets/img/image4.png";
import {AppContext} from "../App";

const CartItem = () => {
  const {currency} = React.useContext(AppContext)
  return (
    <div className="cart-items__item">
      <div className="cart-items__item-price">
        <h3 className="cart-items__item-price-name" >
          Apollo <span>Running Sport</span>
        </h3>
        <span className="cart-items__item-price-price" >{currency}50.00</span>
        <h4 className="cart-items__item-price-size" >Size:</h4>
        <div className="cart-items__item-sizes">
          <button className='cart-items__item-sizes-btn'>XS</button>
          <button className='cart-items__item-sizes-btn disabled-btn'>S</button>
          <button className='cart-items__item-sizes-btn'>M</button>
          <button className='cart-items__item-sizes-btn'>L</button>
        </div>
        <h4 className="cart-items__item-price-color" >Color:</h4>
        <div className='cart-items__item-colors'>
          <button className='cart-items__item-colors-btn grey'></button>
          <button className='cart-items__item-colors-btn brown'></button>
          <button className='cart-items__item-colors-btn green active'></button>
        </div>
      </div>
      <div className="cart-items__item-counter">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <input defaultValue={1} type="text"/>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div className="cart-items__item-img">
        <img src={img} alt="product"/>
      </div>
      <div className='cart-items__item-svg'>
        <div className='svg-wrapper'>
          <svg
            className='left-arrow'
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </div>
        <div className='svg-wrapper'>
          <svg
            className='right-arrow'
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
