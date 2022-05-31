import React from 'react';
import img from "../assets/img/image4.png";
import Input from "./Input";

const DrawerItem = ({id,name,image,color,size,currency,price, capacity,counter}) => {
  return (
     <div className="drawer__items__item">
          <div className="drawer__items__item-price">
            <h3>{name}</h3>
            <span>{currency} {price}</span>
            {
              size || capacity ? <div className='drawer__items__item-size'>
                <h3>{size ? 'Size:' : 'Capacity:'}</h3>
                <div>
                  <button
                    className={'drawer__items__item-size-btn'}>
                    {size || capacity}
                  </button>
                </div>
              </div> : null
            }

            {
              color ?
                <div className='drawer__items__item-color'>
                  <h3>Color:</h3>
                  <div>
                    <button
                      style={{background: `${color}`}}
                      className={'drawer__items__item-color-btn'}>
                    </button>
                  </div>
                </div> : null
            }
          </div>
          <div className="drawer__items__item-counter">
            <Input
            id={id}
            counter={counter}
            />
          </div>
          <div className="drawer__items__item-img">
            <img  src={image[0]} alt="product"/>
          </div>
        </div>

  );
};

export default DrawerItem;
