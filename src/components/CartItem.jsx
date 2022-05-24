import React from 'react';

const CartItem = ({id,name,brand,image,color,size,currency,price, capacity}) => {
  let [cartImage, setCartImage] = React.useState(0)
  const handleChangeImageBack = () => {
      setCartImage(--cartImage)
  }

  const handleChangeImageAhead = () => {
    setCartImage(++cartImage)
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
         <button>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
             <line x1="12" y1="5" x2="12" y2="19"></line>
             <line x1="5" y1="12" x2="19" y2="12"></line>
           </svg>
         </button>
         <input defaultValue={1} type="text"/>
         <button

         >
           <svg

             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
             <line x1="5" y1="12" x2="19" y2="12"></line>
           </svg>
         </button>
       </div>
       <div className="cart-items__item-img">
         <img
           src={cartImage !== -1 && cartImage !== image.length - 1
             ? image[cartImage]
             : setCartImage(0)} alt="product"/>
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
