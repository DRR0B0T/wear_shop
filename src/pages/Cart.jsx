import React from 'react'
import CartItem from '../components/CartItem'
import { AppContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { objectCurrency, cart, total, setTotal } = React.useContext(AppContext)
  const { tax, counter, price } = total
  const navigate = useNavigate()

  React.useEffect(() => {
    setTotal({
      tax: cart.reduce((prev, current) => {
        return prev + parseFloat(current.totalCount) / 100 * 21
      }, 0),
      counter: cart.reduce((prev, current) => {
        return prev + current.counter
      }, 0),
      price: cart.reduce((prev, current) => {
        return prev + parseFloat(current.totalCount)
      }, 0)
    })
    if (cart.length === 0) {
      return navigate('/', { replace: true })
    }
  }, [cart, navigate, setTotal])

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
           <b className='total__order-bill-price'>{objectCurrency} {Math.trunc(tax * 100) / 100}</b></h4>
         <h4 className='total__order-bill-quantity'>Quantity:
           <b className='total__order-bill-price'>{counter}</b></h4>
         <h4 className='total__order-bill-total'>Total:
           <b className='total__order-bill-price'>{objectCurrency} {Math.trunc((price + tax) * 100) / 100}</b></h4>
       </div>
        <div className='total__order-button'>
          <button className='total__order-button-btn'>
            Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
