import React from 'react'
import Input from './Input'
import {AppContext} from "../App";
import Colors from "./Options/Colors";
import Characteristics from "./Options/Characteristics";

const DrawerItem = ({id,
                      name,
                      image,
                      colors,
                      sizes,
                      currency,
                      totalCount,
                      capacity,
                      counter,
                      selectedColor,
                      selectedSize,
                      selectedCapacity,
                      ports,
                      touchId,
                      selectedPort,
                      selectedTouchId
                    }) => {
  const {setSelectedColor, setSelectedSize, setSelectedCapacity,setSelectedPort,setSelectedTouchId } = React.useContext(AppContext)


  return (
    <div className="drawer__items__item">
      <div className="drawer__items__item-price">
        <h3>{name}</h3>
        <span>{currency} {totalCount}</span>
        <Characteristics
          setSelectedSize={setSelectedSize}
          sizes={sizes}
          setSelectedCapacity={setSelectedCapacity}
          capacity={capacity}
          selectedCapacity={selectedCapacity}
          selectedSize={selectedSize}
          selectedPort={selectedPort}
          selectedTouchId={selectedTouchId}
          ports={ports}
          touchId={touchId}
          setSelectedPort={setSelectedPort}
          setSelectedTouchId={setSelectedTouchId}
          container={'drawer__items__item-size'}
          className={'drawer__items__item-size-buttons'}
        />
        <Colors
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          colors={colors}
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