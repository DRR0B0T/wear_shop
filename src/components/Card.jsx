import React from 'react'
import ShoppingIcon from './ShoppingIcon'
import {Link} from 'react-router-dom'
import {AppContext} from '../App'


const Card = ({id, inStock, name, gallery, prices, brand}) => {
  const [onHover, setOnHover] = React.useState(false)

  const {
    currency, setSizes,
    setColors,
    setCapacity,
    setPorts,
    setTouchId,
  } = React.useContext(AppContext)
  const newPrice = prices.find(price => price.currency.symbol === currency).amount


  const onChangeData = () => {
    setOnHover(true)
    setSizes([])
    setColors([])
    setCapacity([])
    setPorts([])
    setTouchId([])
  }


  return (
    <div
      onMouseEnter={onChangeData}
      onMouseLeave={() => setOnHover(false)}
      className={!inStock ? 'card disabled' : 'card'}>
      <Link to={`pdp/${id}/${name}`}>
        <div className='card__img__wrapper'>
          <img className='card-img' src={gallery[0]} alt={'productImage'}/>
          {
            !inStock && <h3 className='card__out'>OUT OF STOCK</h3>
          }
        </div>
      </Link>
      {inStock && onHover ? <ShoppingIcon id={id}/> : ''}
      <h3 className="card__name">
        {name}<br/>
        {brand}
      </h3>
      <span className="card__price">
              <div>{currency} {newPrice}</div>
        </span>

    </div>
  )
}

export default Card
