import React from 'react';
import ShoppingIcon from "./ShoppingIcon";
import {Link} from "react-router-dom";

const Card = ({newData}) => {
  const [label, setLabel] = React.useState('')




  return (
    <>
      {
        newData.map(product =>
          <div
            key={product.id}
            className="card">
            <Link to={`pdp/${product.id}/${product.name}`}>
            <div className='card__img__wrapper'>
                <img className='card-img' src={product.gallery[0]} alt={'productImage'}/>
            </div>
            <ShoppingIcon/>
            <h3 className="card__name">
              {product.name}
            </h3>
            <span className="card__price">
              {product.prices[0].currency.symbol}
              {product.prices[0].amount}
            </span>
          </Link>
          </div>
        )
      }
    </>
  )
};

export default Card;
