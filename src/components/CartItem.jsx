import React from 'react';
import Input from "./Input";
import {AppContext} from "../App";
import cross from '../assets/img/cross.svg'

const CartItem = ({id,name,brand,image,color,size,capacity,currency,price, inStock, counter}) => {
  const {setObjectCurrency, setCart, setCounter} = React.useContext(AppContext)
  let [cartImage, setCartImage] = React.useState(0)



  React.useEffect(()=>{
    setObjectCurrency(currency)
    setCounter(counter)
  },[currency, setObjectCurrency, counter])


  const handleChangeImageBack = () => {
      if(cartImage === 0) {
        setCartImage(image.length-1)
      } else {
        setCartImage(--cartImage)
      }
  }

  const handleChangeImageAhead = () => {
    if(cartImage === image.length - 1) {
      return setCartImage(0)
    } else {
      setCartImage(++cartImage)
    }
  }

  const onDeleteProduct = () => {
    setCart(cart=> cart.filter(product => product.id !== id))
  }


  return (
   <>
     <div>
       <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
     </div>
     <div className="cart-items__item">

       <div className="cart-items__item-price">
         <h3 className="cart-items__item-price-name" >
           {name} <span>{brand}</span>
         </h3>
         <span className="cart-items__item-price-price" >{currency}{price}</span>
         <div className="cart-items__item-sizes">
           <h4 className="cart-items__item-price-size" >{size ? 'Size:' : 'Capacity:'}</h4>
           <button className='cart-items__item-sizes-btn'>{size || capacity}</button>

         </div>
         {
           color ? <div className='cart-items__item-colors'>
             <h4 className="cart-items__item-price-color" >Color:</h4>
             <button
               style={{background: `${color}`}}
               className='cart-items__item-colors-btn'></button>
           </div> :null
         }
       </div>
       <div className="cart-items__item-counter">
         <Input
           counter={counter}
           inStock={inStock}
           name={name}
           id={id}
           color={color}
           size={size}
           capacity={capacity}
         />
       </div>
       <div className="cart-items__item-img">
         <img
           src={image[cartImage]} alt="product"/>
         <button
           onClick={onDeleteProduct}
           className='delete__btn'>
           <img src={cross} alt="crossIcon"/>
         </button>
       </div>
       <div className='cart-items__item-svg'>
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
     </div>
     <div>
       <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
     </div>
   </>
  );
};

export default CartItem;
