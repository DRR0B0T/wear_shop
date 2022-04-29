import React from 'react';
import item from '../assets/img/image1.png'
import ShoppingIcon from "./ShoppingIcon";
import {Link} from "react-router-dom";
import {useQuery} from '@apollo/client'
import {GET_ALL_CARDS} from "../query/currency";

const Card = () => {
  const {data, loading, error} = useQuery(GET_ALL_CARDS)

  const [card, setCard] = React.useState([])
  const [outOfStock, setOutOfStock] = React.useState(false);
  const [cartItem, setCartItem] = React.useState(false);

  React.useEffect(() => {
    if (!loading) {
      setCard(data.categories)
    }
  }, [data])
  console.log(card[0].products)
  return (
    <>
      <Link to={'/pdp'}>
        {
             // card.map(item=>
             //   <div
             //     key={item.id}
             //     className="card">
             //     <img src={item.gallery} alt="Picture"/>
             //     {cartItem ? <ShoppingIcon/> : ''}
             //     <h3 className="card__name">
             //       {item.name}
             //     </h3>
             //     <span className="card__price"> $50 </span>
             //   </div>
             //
             // )
        }
      </Link>
    </>
  );
};

export default Card;
