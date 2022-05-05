import React from 'react';
import ShoppingIcon from "./ShoppingIcon";
import {Link} from "react-router-dom";
import noImg from '../assets/img/noImg.png'


const Card = ({newData}) => {
  const [cartItem] = React.useState(false);
  console.log(newData)

  return (
    <>
        {
        newData.map(item =>
            <div
              key={item.id}
              className="card">
              <div className='card__img__wrapper'>
              <Link to={'/pdp'}>
                   <img className='card-img' src={item.gallery[0]} alt={'productImage'}/>
              </Link>
              </div>
              {cartItem ? <ShoppingIcon/> : ''}
              <h3 className="card__name">
                {item.name}
              </h3>
              <span className="card__price"> $ 50</span>
            </div>
          )
        }
    </>
  );
};

export default Card;
