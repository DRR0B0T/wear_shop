import React from 'react'
import Input from './Input'
import Button from "./Button";
import {AppContext} from "../App";

const DrawerItem = ({id, name, image, color, size, currency, totalCount, capacity, counter, selectedColor, selectedSize, selectedCapacity}) => {
  const {setSelectedColor, setSelectedSize, setSelectedCapacity, } = React.useContext(AppContext)


  return (
    <div className="drawer__items__item">
      <div className="drawer__items__item-price">
        <h3>{name}</h3>
        <span>{currency} {totalCount}</span>

        <div className='drawer__items__item-size'>
          <h3>{size ? 'Size:' : 'Capacity:'}</h3>
          <div>
            {
              size.length > 0 ? (size.map(size =>
                  <Button
                    onClick={()=> console.log(size.value)}
                    key={size.id}
                    props={size.value}
                    className={selectedSize === size.value ? 'drawer__items__item-size-btn active' : 'drawer__items__item-size-btn'}
                  />
                ))
                : (capacity.map(capacity => <Button
                  key={capacity.id}
                  props={capacity.value}
                  className={selectedCapacity === capacity.id ? 'drawer__items__item-size-btn capacity active' : 'drawer__items__item-size-btn capacity'}
                />))
            }
          </div>
        </div>


        {
          color.length > 0
            ? <div className='drawer__items__item-color'>
              <h3>Color:</h3>
              <div>
                {
                  color.map(color => <Button
                    color={color.value}
                    className={selectedColor === color.id ? 'drawer__items__item-color-btn active' : 'drawer__items__item-color-btn'}
                    key={color.id}
                    selectedColor={selectedColor}
                  />)
                }
              </div>
            </div>
            : null
        }
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