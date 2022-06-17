import React from 'react'
import Input from './Input'
import { AppContext } from '../App'
import Button from "./Button";

const CartItem = ({ id, name, brand, image, color, size, capacity, currency, totalCount, counter,selectedColor,selectedSize,selectedCapacity }) => {
  const {setObjectCurrency, setSelectedColor, setSelectedSize, setSelectedCapacity, } = React.useContext(AppContext)
  let [cartImage, setCartImage] = React.useState(0)


  React.useEffect(() => {
    setObjectCurrency(currency)
  }, [currency, setObjectCurrency, counter])

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
        <hr style={{ marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5' }}/>
      </div>
      <div className="cart-items__item">
        <div className="cart-items__item-price">
          <h3 className="cart-items__item-price-name" >
            {name} <span>{brand}</span>
          </h3>
          <span className="cart-items__item-price-price" >{currency}{totalCount}</span>
          <div className="cart-items__item-sizes">
            <h4 className="cart-items__item-price-size" >{size ? 'Size:' : 'Capacity:'}</h4>

            <div>
              {
                size.length > 0 ? (size.map(size =>
                    <Button
                      onClick={()=> setSelectedSize(size.value)}
                      key={size.id}
                      props={size.value}
                      className={selectedSize === size.value ? 'cart-items__item-sizes-btn active' : 'cart-items__item-sizes-btn'}
                    />
                  ))
                  : (capacity.map(capacity => <Button
                    key={capacity.id}
                    props={capacity.value}
                    className={selectedCapacity === capacity.id ? 'cart-items__item-sizes-btn capacity active' : 'cart-items__item-sizes-btn capacity'}
                  />))
              }
            </div>
          </div>
          {
            color.length > 0
              ? <div className='cart-items__item-colors'>
                <h4 className="cart-items__item-price-color" >Color:</h4>
               <div>
                 {
                   color.map(color => <Button
                     color={color.value}
                     className={selectedColor === color.id ? 'cart-items__item-colors-btn active' : 'cart-items__item-colors-btn'}
                     key={color.id}
                     selectedColor={selectedColor}
                   />)
                 }
               </div>
              </div>
              : null
          }
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
        <hr style={{ marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5' }}/>
      </div>
    </>
  )
}

export default CartItem