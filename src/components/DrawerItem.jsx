import React from 'react'
import Input from './Input'
import Colors from "./Options/Colors";
import Characteristics from "./Options/Characteristics";

const DrawerItem = ({
                      id,
                      name,
                      image,
                      currency,
                      totalCount,
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

  return (
    <div className="drawer__items__item">
      <div className="drawer__items__item-price">
        <h3>{name}</h3>
        <span>{currency} {totalCount}</span>
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