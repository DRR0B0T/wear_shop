import React from 'react';
import CartItem from "../components/CartItem";
import {AppContext} from "../App";
import {useNavigate } from "react-router-dom";

const Cart = () => {
  const { objectCurrency, cart, counter,price } = React.useContext(AppContext)
  let tax = (price  / 100 * 21).toFixed(2)
  let total = ((Number(price) * counter) + Number(tax)).toFixed(2)



  let navigate = useNavigate()


 React.useEffect(()=> {
   if (cart.length === 0) {
     return navigate("/", { replace: true })
   }
 },[cart,navigate])

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-items">
          {
            cart.length > 0 && cart.map((product) =>
            <CartItem
              key={product.id}
              {...product}/>
            )
          }
      </div>
      <div className='total__order'>
       <div className='total__order-bill'>
         <h4 className='total__order-bill-tax'>Tax 21%:
           <b className='total__order-bill-price'>{objectCurrency} {tax}</b></h4>
         <h4 className='total__order-bill-quantity'>Quantity:
           <b className='total__order-bill-price'>{cart.length -1 + counter }</b></h4>
         <h4 className='total__order-bill-total'>Total:
           <b className='total__order-bill-price'>{objectCurrency} {total}</b></h4>
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
