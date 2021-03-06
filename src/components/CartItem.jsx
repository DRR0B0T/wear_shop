import React from 'react'
import Input from './Input'
import {AppContext} from '../App'
import Colors from "./Options/Colors";
import Characteristics from "./Options/Characteristics";

const CartItem = ({
                    id,
                    name,
                    brand,
                    image,
                    price,
                    counter,
                    sizes,
                    capacity,
                    ports,
                    touchId,
                    colors,
                    selectedColor,
                    selectedSize,
                    selectedCapacity,
                    selectedPort,
                    selectedTouchId,

                  }) => {
  const {currency} = React.useContext(AppContext)

  let [cartImage, setCartImage] = React.useState(0)


  const handleChangeImageBack = () => {
    if (cartImage === 0) {
      setCartImage(image.length - 1)
    } else {
      setCartImage(--cartImage)
    }
  }

  const handleChangeImageAhead = () => {
    if (cartImage === image.length - 1) {
      return setCartImage(0)
    } else {
      setCartImage(++cartImage)
    }
  }

  return (
    <>
      <div>
        <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
      </div>
      <div className="cart-items__item">
        <div className="cart-items__item-price">
          <h3 className="cart-items__item-price-name">
            {name} <span>{brand}</span>
          </h3>
          <span className="cart-items__item-price-price">{currency}{price}</span>
          <Characteristics
            sizes={sizes}
            capacity={capacity}
            ports={ports}
            touchId={touchId}
            selectedSize={selectedSize}
            selectedCapacity={selectedCapacity}
            selectedPort={selectedPort}
            selectedTouchId={selectedTouchId}
            container={'cart-items__item-sizes'}
            className={'cart-items__item-sizes-btn'}
          />
          <Colors
            colors={colors}
            selectedColor={selectedColor}
            className={'cart-items__item-colors-btn'}
            container={'cart-items__item-colors'}
          />

        </div>
        <div className="cart-items__item-counter">
          <Input
            counter={counter}
            id={id}
          />
        </div>
        <div className="cart-items__item-img">
          <img src={image[cartImage]} alt="product"/>
        </div>
        {
          image.length > 1
            ? <div className='cart-items__item-svg'>
              <button
                onClick={handleChangeImageBack}
                className='svg-wrapper'>
                <svg
                  className='left-arrow'
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                onClick={handleChangeImageAhead}
                className='svg-wrapper'>
                <svg
                  className='right-arrow'
                  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round"
                        strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            : null
        }
      </div>
      <div>
        <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
      </div>
    </>
  )
}

export default CartItem