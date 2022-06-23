import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {AppContext} from '../App'
import Spinner from '../components/Spinner'

import nextId from 'react-id-generator'
import {GET_PRODUCT} from '../hooks/useAllData'
import Characteristics from "../components/Options/Characteristics";
import Colors from "../components/Options/Colors";

const PDP = () => {
  const {
    currency,
    setCart,
    price,
    setPrice,
    cart,
    selectedColor,
    selectedSize, setSelectedSize,
    selectedCapacity, setSelectedCapacity,
    selectedPort,
    selectedTouchId,
  } = React.useContext(AppContext)
  const [img, setImg] = React.useState('')


  const [colors, setColors] = React.useState([])
  const [sizes, setSizes] = React.useState([])
  const [capacity, setCapacity] = React.useState([])
  const [ports, setPorts] = React.useState([])
  const [touchId, setTouchId] = React.useState([])


  const {id} = useParams()


  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: {
      id
    }
  })
  console.log(data)
  React.useEffect(() => {
    const colorItem = data?.product?.attributes.find(item => item.id === 'Color')
    const sizeItem = data?.product?.attributes.find(item => item.id === 'Size')
    const capacityItem = data?.product?.attributes.find(item => item.id === 'Capacity')
    const ports = data?.product?.attributes.find(item => item.id === 'With USB 3 ports')
    const touchId = data?.product?.attributes.find(item => item.id === 'Touch ID in keyboard')

    if (colorItem !== undefined) setColors(colorItem.items)
    if (sizeItem !== undefined) setSizes(sizeItem.items)
    if (capacityItem !== undefined) setCapacity(capacityItem.items)
    if (ports !== undefined) setPorts(ports.items)
    if (touchId !== undefined) setTouchId(touchId.items)

    const productPrice = data?.product?.prices.find(item => item.currency.symbol === currency).amount
    if (productPrice) setPrice(productPrice)
    if (data) {
      setImg(data?.product?.gallery[0])
      setSelectedCapacity(capacityItem?.items[0].id)
      setSelectedSize(sizeItem?.items[0].id)
    }

  }, [data, currency, setPrice, setSelectedCapacity, setSelectedSize])


  const addProductToCart = () => {
    const htmlId = nextId()

    if (data?.product.inStock) {
      const object = {
        id: htmlId,
        name: data?.product.name,
        image: data?.product.gallery,
        brand: data?.product.brand,
        inStock: data?.product.inStock,
        prices: data?.product.prices,
        counter: 1,
        totalCount: price,
        colors,
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
        price,
      }

      if (object.ports.length > 0
        || object.touchId.length > 0
        || object.colors.length > 0
        || object.sizes.length > 0
        || object.capacity.length > 0) {

        const objSize = cart.find(product => product.selectedSize === object.selectedSize)
        const objColor = cart.find(product => product.selectedColor === object.selectedColor)
        const objCapacity = cart.find(product => product.selectedCapacity === object.selectedCapacity)
        const objPort = cart.find(product => product.selectedPort === object.selectedPort)
        const objTouchId = cart.find(product => product.selectedTouchId === object.selectedTouchId)

        if (isEqual(objSize, object)
          && isEqual(objColor, object)
          && isEqual(objCapacity, object)
          && isEqual(objPort, object)
          && isEqual(objTouchId, object)
        ) {
          setCart((cart) => {
            return cart.map((product) => {
              if (object.selectedSize === product.selectedSize
                && object.selectedCapacity === product.selectedCapacity
                && object.selectedColor === product.selectedColor
                && object.selectedPort === product.selectedPort
                && object.selectedTouchId === product.selectedTouchId
              ) {
                return {
                  ...product,
                  counter: product.counter + 1,
                  totalCount: Math.trunc(((product.counter + 1) * product.price) * 100) / 100,
                }
              }
              return product
            })
          })
        } else {
          setCart((cart) => [...cart, object])
        }


        function isEqual(object1, object2) {
          if (object1 === undefined || object2 === undefined) return false
          const props1 = Object.getOwnPropertyNames(object1).shift()
          const props2 = Object.getOwnPropertyNames(object2).shift()

          if (JSON.stringify(object1) === JSON.stringify(object2)) return false

          if (props1.length !== props2.length) {
            return false
          }

          for (let i = 0; i < props1.length; i += 1) {
            const prop = props1[i]
            const bothAreObjects = typeof (object1[prop]) === 'object' && typeof (object2[prop]) === 'object'

            if ((!bothAreObjects && (object1[prop] !== object2[prop])) ||
              (bothAreObjects && !isEqual(object1[prop], object2[prop]))) {
              return false
            }
          }

          return true
        }
      }

    }

  }

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
              onClick={addProductToCart}
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