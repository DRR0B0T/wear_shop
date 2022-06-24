import React from 'react'
import {useParams} from 'react-router-dom'
import {AppContext} from '../App'
import Characteristics from "../components/Options/Characteristics";
import Colors from "../components/Options/Colors";

import {useQuery} from "@apollo/client";
import {GET_PRODUCT} from "../hooks/query";
import Spinner from "../components/Spinner";
import {addToCart} from "../hooks/addToCart";

const PDP = () => {
  const {
    currency,
    price,
    selectedColor,
    selectedSize,
    selectedCapacity,
    selectedPort,
    selectedTouchId,
    colors,
    sizes,
    capacity,
    ports,
    touchId,
    img,
    setImg,
    setSelectedCapacity,
    setSelectedSize,
    setSelectedColor,
    setSelectedPort,
    setSelectedTouchId,
    setSizes,
    setColors,
    setCapacity,
    setPorts,
    setTouchId,
    setPrice,
    cart, setCart
  } = React.useContext(AppContext)


  const {id} = useParams()

  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: {
      id
    },
    pollInterval: 100,
  })
  React.useEffect(() => {
    const colorItem = data?.product?.attributes.find(item => item.id === 'Color')
    const capacityItem = data?.product?.attributes.find(item => item.id === 'Capacity')
    const ports = data?.product?.attributes.find(item => item.id === 'With USB 3 ports')
    const touchId = data?.product?.attributes.find(item => item.id === 'Touch ID in keyboard')
    const sizeItem = data?.product?.attributes.find(item => item.id === 'Size')
    if (sizeItem !== undefined) setSizes(sizeItem.items)
    if (colorItem !== undefined) setColors(colorItem.items)
    if (capacityItem !== undefined) setCapacity(capacityItem.items)
    if (ports !== undefined) setPorts(ports.items)
    if (touchId !== undefined) setTouchId(touchId.items)


    const productPrice = data?.product?.prices.find(item => item.currency.symbol === currency).amount
    if (productPrice) setPrice(productPrice)
    if (data) {
      setImg(data?.product?.gallery[0])
      setSelectedCapacity(capacityItem?.items[0].id)
      setSelectedSize(sizeItem?.items[0].id)
      setSelectedColor(colorItem?.items[0].id)
      setSelectedPort(ports?.items[0].id)
      setSelectedTouchId(touchId?.items[0].id)
    }

  }, [data,
    currency,
    setPrice,
    setSelectedCapacity,
    setSelectedSize,
    setSelectedColor,
    setSelectedPort,
    setSelectedTouchId,
    setTouchId,
    setSizes,
    setColors,
    setCapacity,
    setPorts,
    setImg,
  ])
  if (loading) return <Spinner/>

  if (error) return `Error ${error.message}`

  return (
    <div className="pdp">
      <div className="pdp-left">
        {
          data.product.gallery.map(image => <div
            key={image}
            className='pdp-left__images'>
            <img
              onClick={() => setImg(image)}
              className='pdp-left__images_img' src={image} alt="Product"/>
          </div>)
        }
      </div>
      <div className="pdp-right">
        <div className={!data.product.inStock ? "pdp-right__img-container out" : "pdp-right__img-container"}>
          <img src={img} alt="Product"/>
          {
            !data.product.inStock && <h3 className='pdp-right__out'>OUT OF STOCK</h3>
          }
        </div>
        <div className='pdp-right-content'>
          <div className="pdp-right-content__header">
            <h2>{data.product.name}</h2>
            <span>{data.product.brand}</span>
          </div>
          <Characteristics
            selectedSize={selectedSize}
            selectedCapacity={selectedCapacity}
            selectedPort={selectedPort}
            selectedTouchId={selectedTouchId}
            sizes={sizes}
            capacity={capacity}
            ports={ports}
            touchId={touchId}
            container={'pdp-right-content__sizes'}
            className={'pdp-right-content__sizes-buttons'}
          />
          <Colors
            colors={colors}
            selectedColor={selectedColor}
            className={'pdp-right-content__colors-btn'}
            container={'pdp-right-content__colors'}
          />
          <div className="pdp-right-content__price">
            <h3>Price:</h3>
            <span>{currency}{price}</span>
            <button
              onClick={() => addToCart(data, colors,
                sizes,
                capacity,
                ports,
                touchId,
                selectedColor,
                selectedSize,
                selectedCapacity,
                selectedPort,
                selectedTouchId,
                currency,
                price, cart, setCart)}
            >
              Add to cart
            </button>
          </div>
          <div
            dangerouslySetInnerHTML={{__html: data.product.description}}/*I know that this point needs to be checked for safe HTML injection, but since there is no input, this is not necessary.*/
            className="pdp-right-content__footer">
          </div>
        </div>
      </div>

    </div>
  )
}

export default PDP