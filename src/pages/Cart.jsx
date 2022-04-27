import React from 'react';
import img from "../assets/img/image4.png";
import glasses from '../assets/img/glasses.png'

const Cart = () => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        <div>
        <hr style={{marginTop: 60, borderBottom: 1, borderColor: '#E5E5E5'}}/>
        <div className="cart-items__item">
          <div className="cart-items__item-price">
            <h3>Apollo</h3>
            <h2>Running Sport</h2>
            <span>$50.00</span>
            <div>
              <button>S</button>
              <button className='disabled-btn'>M</button>
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
            <div className='cart-items__item-svg'>
              <svg
                className='left-arrow'
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
              <svg
                className='right-arrow'
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                      strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
        <div>
          <hr style={{marginTop: 60, borderBottom: 1, borderColor: '#E5E5E5'}}/>
          <div className="cart-items__item">
            <div className="cart-items__item-price">
              <h3>Jupiter</h3>
              <h2>Wayfarer</h2>
              <span>$75.00</span>
              <div>
                <button>S</button>
                <button className='disabled-btn'>M</button>
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

              <img src={glasses} alt="product"/>
              <div className='cart-items__item-svg'>
                <svg
                  className='left-arrow'
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
                <svg
                  className='right-arrow'
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
