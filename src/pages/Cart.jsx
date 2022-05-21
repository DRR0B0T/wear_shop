import React from 'react';
import CartItem from "../components/CartItem";
import {AppContext} from "../App";

const Cart = () => {
  const {currency} = React.useContext(AppContext)

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
        <div>
        <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
        <CartItem />
        </div>
        <div>
          <hr style={{marginTop: 30, borderBottom: 1, borderColor: '#E5E5E5'}}/>
        </div>
      </div>
      <div className='total__order'>
       <div className='total__order-bill'>
         <h4 className='total__order-bill-tax'>Tax 21%:
           <b className='total__order-bill-price'>{currency} 42.00</b></h4>
         <h4 className='total__order-bill-quantity'>Quantity:
           <b className='total__order-bill-price'>3</b></h4>
         <h4 className='total__order-bill-total'>Total:
           <b className='total__order-bill-price'>{currency} 200.00</b></h4>
       </div>
        <div className='total__order-button'>
          <button className='total__order-button-btn'>
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
