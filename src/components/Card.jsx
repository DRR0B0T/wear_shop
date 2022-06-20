import React from 'react'
import ShoppingIcon from './ShoppingIcon'
import {Link} from 'react-router-dom'
import {AppContext} from '../App'


const Card = ({id, inStock, name, gallery, prices, brand}) => {
  const {currency, cart} = React.useContext(AppContext)
  const newPrice = prices.find(price => price.currency.symbol === currency).amount

  return (
    <div key={id}
         className={!inStock ? 'card disabled' : 'card'}>
      <Link to={`pdp/${id}/${name}`}>
        <div className='card__img__wrapper'>
          <img className='card-img' src={gallery[0]} alt={'productImage'}/>
          {
            !inStock && <h3 className='card__out'>OUT OF STOCK</h3>
          }
        </div>
        {cart.some(item => item.id === id) && <ShoppingIcon/>}
        <h3 className="card__name">
          {name}<br/>
          {brand}
        </h3>
        <span className="card__price">
              <div>{currency} {newPrice}</div>
        </span>
      </Link>
    </div>
  )
}

export default Card
