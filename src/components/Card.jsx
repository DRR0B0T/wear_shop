import React from 'react';
import ShoppingIcon from "./ShoppingIcon";
import {Link} from "react-router-dom";
import {AppContext} from "../App";


const Card = ({id,inStock, name, gallery, prices}) => {
  const [itemInCart] = React.useState(false)
  const {currency} = React.useContext(AppContext)
  const price = prices.find(price=>price.currency.symbol === currency).amount
  const cardObject = {id, name, gallery, price} // Todo: need to think about this object

  return (
    <div key={id}
          className={!inStock ? "card disabled" : "card"}>
            <Link to={`pdp/${id}/${name}`}>
            <div className='card__img__wrapper'>
                <img className='card-img' src={gallery[0]} alt={'productImage'}/>
              {!inStock && <h3 className='card__out'>OUT OF STOCK</h3>}
            </div>
              {itemInCart && <ShoppingIcon/>}
            <h3 className="card__name">
              {name}
            </h3>
            <span className="card__price">
              <div>{currency} {price}</div>
            </span>
          </Link>
          </div>
  )
};

export default Card;
