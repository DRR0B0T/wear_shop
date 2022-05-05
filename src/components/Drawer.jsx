import React from 'react';
import img from '../assets/img/image4.png'
import glasses from '../assets/img/glasses.png'
import {Link} from "react-router-dom";

const Drawer = ({cartOpened, setCartOpened}) => {
  const [btn, setBtn] = React.useState(false)
  return (
    <div
      onClick={() => setCartOpened(false)}
      className={cartOpened ? 'overlay visible' : 'overlay'}>
      <div
        onClick={e => e.stopPropagation()}
        className="drawer">
        <div className="drawer-container">
          <div className="drawer__title">
            <h3 >
              <b>My bag,</b> <span>3 items</span>
            </h3>
          </div>
          <div className="drawer__items">
            <div className="drawer__items__item">
              <div className="drawer__items__item-price">
                <h3>Apollo &nbsp; Running Sport</h3>
                <span>$50.00</span>
                <div className='drawer__items__item-size'>
                  <h3>Size:</h3>
                 <div>
                   <button

                     className='drawer__items__item-size-btn'>XS</button>
                   <button className='drawer__items__item-size-btn disabled-btn'>S</button>
                   <button className='drawer__items__item-size-btn'>M</button>
                   <button className='drawer__items__item-size-btn'>L</button>
                 </div>
                </div>
                <div >
                  <h3>Color:</h3>
                  <div className='drawer__items__item-color'>
                    <button
                      onClick={()=> setBtn(!btn)}
                      className={btn ? 'drawer__items__item-color-btn grey active' : 'drawer__items__item-color-btn grey'}></button>
                    <button className='drawer__items__item-color-btn brown'></button>
                    <button className='drawer__items__item-color-btn green'></button>
                  </div>
                </div>
              </div>
              <div className="drawer__items__item-counter">
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
              <div className="drawer__items__item-img">
                <img  src={img} alt="product"/>
              </div>
            </div>
            <div className="drawer__items__item">
              <div className="drawer__items__item-price">
                <h3>Jupiter Wayfarer</h3>
                <span>$75.00</span>
                <div className='drawer__items__item-size'>
                  <h3>Size:</h3>
                 <div>
                   <button

                     className='drawer__items__item-size-btn'>XS</button>
                   <button className='drawer__items__item-size-btn disabled-btn'>S</button>
                   <button className='drawer__items__item-size-btn'>M</button>
                   <button className='drawer__items__item-size-btn'>L</button>
                 </div>
                </div>
                <div >
                  <h3>Color:</h3>
                  <div className='drawer__items__item-color'>
                    <button
                      onClick={()=> setBtn(!btn)}
                      className={btn ? 'drawer__items__item-color-btn grey active' : 'drawer__items__item-color-btn grey'}></button>
                    <button className='drawer__items__item-color-btn brown'></button>
                    <button className='drawer__items__item-color-btn green'></button>
                  </div>
                </div>
              </div>
              <div className="drawer__items__item-counter">
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
              <div className="drawer__items__item-img">
                <img  src={glasses} alt="product"/>
              </div>
            </div>

          </div>
          <div className="drawer__total">
            <span>Total</span> <span>$200</span>
          </div>
          <div className="drawer__footer">
            <Link
              onClick={()=>setCartOpened(false)}
              to='/cart'>
              <button className='drawer__footer-button'>
                View bag
              </button>
            </Link>
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
