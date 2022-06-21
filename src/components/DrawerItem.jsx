import React from 'react'
import Input from './Input'
import Colors from "./Options/Colors";
import Characteristics from "./Options/Characteristics";
import {AppContext} from "../App";

const DrawerItem = ({
                      id,
                      name,
                      image,
                      prices,
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


  const {currency, setCart} = React.useContext(AppContext)

  React.useEffect(() => {
    const newPrice = prices.find(price => price.currency.symbol === currency).amount

    setCart(cart => {
      return cart.map(item => {
        if (item.id === id) {
          return {
            ...item,
            price: newPrice,
            totalCount: Math.trunc(((item.counter) * newPrice) * 100) / 100
          }
        }
        return item
      })
    })
  }, [currency, setCart, prices, id])


  return (
    <div className="drawer__items__item">
      <div className="drawer__items__item-price">
        <h3>{name}</h3>
        <span>{currency} {price}</span>
        <Characteristics
          sizes={sizes}
          capacity={capacity}
          ports={ports}
          touchId={touchId}
          selectedSize={selectedSize}
          selectedCapacity={selectedCapacity}
          selectedPort={selectedPort}
          selectedTouchId={selectedTouchId}
          container={'drawer__items__item-size'}
          className={'drawer__items__item-size-buttons'}
        />
        <Colors
          colors={colors}
          selectedColor={selectedColor}
          className={'drawer__items__item-color-btn'}
          container={'drawer__items__item-color'}
        />
      </div>
      <div className="drawer__items__item-counter">
        <Input
          id={id}
          counter={counter}
        />
      </div>
      <div className="drawer__items__item-img">
        <img src={image[0]} alt="product"/>
      </div>

    </div>

  )
}

export default DrawerItem