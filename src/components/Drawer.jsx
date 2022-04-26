import React from 'react';
import img from '../assets/img/image4.png'

const Drawer = ({cartOpened}) => {

  return (
    <div
      className={cartOpened ? 'overlay visible' : 'overlay'}>
      <div
        className="drawer">
        <div className="drawer-container">
          <div className="drawer__title">
            <h3 >
              <b>My bag,</b> <span>2 items</span>
            </h3>
          </div>
          <div className="drawer__items">
            <div className="drawer__items__item">
              <div className="drawer__items__item-price">
                <h3>Apollo Running Sport</h3>
                <span>$50.00</span>
                <div>
                  <button>S</button>
                  <button className='disabled-btn'>M</button>
                </div>
              </div>
              <div className="drawer__items__item-counter">
                <button>+</button>
                <input defaultValue={1} type="text"/>
                <button>-</button>
              </div>
              <div className="drawer__items__item-img">
                <img  src={img} alt="product"/>
              </div>
            </div>
            <div className="drawer__items__item">
              <div className="drawer__items__item-price">
                <h3>Apollo Running Sport</h3>
                <span>$75.00</span>
                <div>
                  <button>S</button>
                  <button className='disabled-btn'>M</button>
                </div>
              </div>
              <div className="drawer__items__item-counter">
                <button>+</button>
                <input defaultValue={1} type="text"/>
                <button>-</button>
              </div>
              <div className="drawer__items__item-img">
                <img  src={img} alt="product"/>
              </div>
            </div>
          </div>
          <div className="drawer__total">
            <span>Total</span> <span>$100</span>
          </div>
          <div className="drawer__footer">
            <button className='drawer__footer-button'>
              View bag
            </button>
            <button className='drawer__footer-button active'>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
