import React from 'react';
import img from "../assets/img/image4.png";
import {AppContext} from "../App";

const DrawerItem = ({id,name,image,color,size,currency,price, capacity}) => {
  const { selectedProduct, setSelectedProduct} = React.useContext(AppContext)
  let [counter, setCounter] = React.useState(1)

  const handleClickPlus = () => {
      setCounter(++counter)
  }

  const handleClickMinus = () => {
       setCounter(--counter)
       if(counter === 0 )setSelectedProduct([])
  }

  const onChangeValueInput = (e) => {
      setCounter(+e.target.value)
  }


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
            <button
              onClick={handleClickPlus}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <input
              onChange={onChangeValueInput}
              value={counter}/>
            <button
              onClick={handleClickMinus}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   strokeWidth="2"
                   strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
          </div>
          <div className="drawer__items__item-img">
            <img  src={image[0]} alt="product"/>
          </div>
        </div>

  );
};

export default DrawerItem;
