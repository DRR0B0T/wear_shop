import React from 'react'

import {Link} from 'react-router-dom'
import {AppContext} from '../App'
import DrawerItem from "./DrawerItem";

const Drawer = ({cartOpened, setCartOpened}) => {
  const {visible, cart, objectCurrency, total} = React.useContext(AppContext)
  const {counter, price} = total

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
                <h3>
                  <b>My bag,</b> <span>{counter} items</span>
                </h3>
              </div>
              <div className="drawer__items">
                {
                  cart.length > 0 && cart.map((product) =>
                    <DrawerItem
                      key={product.id}
                      {...product}
                    />
                  )
                }
              </div>
              <div className="drawer__total">
                <span>Total:</span> <span>{objectCurrency}{Math.trunc(price * 100) / 100}</span>
              </div>
              <div className="drawer__footer">
                <Link
                  onClick={() => setCartOpened(false)}
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
  )
}

export default Drawer
