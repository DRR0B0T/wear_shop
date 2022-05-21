import React from 'react';

import {Link} from "react-router-dom";
import DrawerItem from "./DrawerItem";
import {AppContext} from "../App";

const Drawer = ({cartOpened, setCartOpened}) => {
  const {currency, visible} = React.useContext(AppContext)
  return (
    <>
      {
        !visible && <div
          onClick={() => setCartOpened(false)}
          className={cartOpened ? 'overlay visible' : 'overlay'}>
          <div onClick={e => e.stopPropagation()}
               className="drawer">
            <div className="drawer-container">
              <div className="drawer__title">
                <h3 >
                  <b>My bag,</b> <span>3 items</span>
                </h3>
              </div>
              <div className="drawer__items">
                <DrawerItem/>
              </div>
              <div className="drawer__total">
                <span>Total</span> <span>{currency}200</span>
              </div>
              <div className="drawer__footer">
                <Link
                  onClick={()=>setCartOpened(false)}
                  to='/cart'>
                  <button className='drawer__footer-button'>
                    View bag
                  </button>
                </Link>
                <button className='drawer__footer-button'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Drawer;
