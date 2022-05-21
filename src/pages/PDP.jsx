import React from 'react';
import {useParams} from "react-router-dom";
import {gql,  useQuery} from "@apollo/client";
import {AppContext} from "../App";

const GET_PRODUCT = gql `
    query Product($id: String!){
        product (id: $id) {
            id
            name
            brand
            gallery
            description
            prices{
                amount
                currency {
                    label
                    symbol
                }
            }
            attributes {
                id
                name
                items {
                    id
                    value
                }
            }
        }
    }
`


const PDP = () => {
  const {currency} = React.useContext(AppContext)
  const [img, setImg] = React.useState('')
  const [selectedColor, setSelectedColor] = React.useState('')
  const [selectedSize, setSelectedSize] = React.useState('')
  const [colors,setColors] = React.useState([])
  const [sizes, setSizes] = React.useState([])
  const [capacity, setCapacity] = React.useState([]);

  let {id} = useParams()
  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: {
      id: id
    }
  })


  React.useEffect(() =>{
    const colorItem = data?.product?.attributes.find(item => item.id === 'Color')
    const sizeItem = data?.product?.attributes.find(item => item.id === 'Size')
    const capacityItem = data?.product?.attributes.find(item => item.id === 'Capacity')
    if (data) {
      setImg(data?.product?.gallery[0])
    }
    if (colorItem !== undefined) setColors(colorItem.items)
    if (sizeItem !== undefined) setSizes(sizeItem.items)
    if (capacityItem !== undefined) setCapacity(capacityItem.items)
  },[data])



  if (loading) return null

  if (error) return `Error ${error.message}`

  return (
      <div className="pdp">
            <div className="pdp-left">
              {
                data.product.gallery.map(image=><div
                  key={image}
                  className='pdp-left__images'>
                  <img
                    onClick={()=>setImg(image)}
                    className='pdp-left__images_img' src={image} alt="Product"/>
                </div>)
              }
            </div>
            <div className="pdp-right">
              <div >
                <img
                  className="pdp-right-main-img"
                  src={img} alt="Product"/>
              </div>
              <div className='pdp-right-content'>
                <div className="pdp-right-content__header">
                  <h2>{data.product.name}</h2>
                  <span>{data.product.brand}</span>
                </div>
                {
                    sizes.length > 0
                    ? (<div className='pdp-right-content__sizes'>
                    <h3>Size:</h3>
                    <div className='pdp-right-content__sizes-buttons'>
                      {
                        sizes.map(size =>
                          <button
                            onClick={() => setSelectedSize(size.id)}
                            key={size.id}
                            className={selectedSize === size.id ? 'active' : ''}>{size.value}</button>)
                      }
                    </div>
                    </div>)
                    : capacity.length > 0 && (<div className='pdp-right-content__sizes'>
                      <h3>Capacity:</h3>
                      <div className='pdp-right-content__sizes-buttons capacity'>
                        {
                          capacity.map(capacity =>
                            <button
                              onClick={() => setSelectedSize(capacity.id)}
                              key={capacity.id}
                              className={selectedSize === capacity.id ? 'active' : ''}>{capacity.value}</button>)
                        }
                      </div>
                    </div>)
                }

                {
                  colors.length
                  ? (<div className={'pdp-right-content__colors'}>
                    <h3 style={{marginTop: 10}}>Color:</h3>
                  {
                    colors.map(color =>
                      <button
                        onClick={() => setSelectedColor(color.id)}
                        key={color.id}
                        style={{background: `${color.value}`}}
                        className={selectedColor === color.id
                          ? 'pdp-right-content__colors-btn active'
                          : 'pdp-right-content__colors-btn'}></button>
                    )
                  }
                    </div>)
                    : null
                }
                <div className="pdp-right-content__price">
                  <h3>Price:</h3>
                  <span>{currency}{data.product.prices.find(price=> price.currency.symbol === currency).amount}</span>
                  <button
                  >
                    Add to cart
                  </button>
                </div>
                <div
                  dangerouslySetInnerHTML={{__html: data.product.description}}
                  className="pdp-right-content__footer">
                </div>
              </div>
            </div>

      </div>
  );
};

export default PDP;
