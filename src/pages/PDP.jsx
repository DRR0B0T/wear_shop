import React from 'react'
import {useParams} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {AppContext} from '../App'
import Spinner from '../components/Spinner'

import nextId from 'react-id-generator'
import {GET_PRODUCT} from '../hooks/useAllData'

const PDP = () => {
  const {currency, setCart, price, setPrice, cart} = React.useContext(AppContext)
  const [img, setImg] = React.useState('')

  const [colors, setColors] = React.useState([])
  const [sizes, setSizes] = React.useState([])
  const [capacity, setCapacity] = React.useState([])

  const [selectedColor, setSelectedColor] = React.useState('')
  const [selectedSize, setSelectedSize] = React.useState('')
  const [selectedCapacity, setSelectedCapacity] = React.useState('')

  const {id} = useParams()

  const {data, loading, error} = useQuery(GET_PRODUCT, {
    variables: {
      id
    }
  })


  React.useEffect(() => {
    const colorItem = data?.product?.attributes.find(item => item.id === 'Color')
    const sizeItem = data?.product?.attributes.find(item => item.id === 'Size')
    const capacityItem = data?.product?.attributes.find(item => item.id === 'Capacity')
    const productPrice = data?.product?.prices.find(item => item.currency.symbol === currency).amount

    if (data) {
      setImg(data?.product?.gallery[0])
    }
    if (productPrice) setPrice(productPrice)

    if (colorItem !== undefined) setColors(colorItem.items)
    if (sizeItem !== undefined) setSizes(sizeItem.items)
    if (capacityItem !== undefined) setCapacity(capacityItem.items)
  }, [data, currency, setPrice])

  const addProductToCart = () => {
    const htmlId = nextId()

    if (data?.product.inStock) {
     const object = {
        id: htmlId,
        name: data?.product.name,
        image: data?.product.gallery,
        brand: data?.product.brand,
        inStock: data?.product.inStock,
        counter: 1,
        totalCount: price,
        color: selectedColor,
        size: selectedSize,
        capacity: selectedCapacity,
        currency,
        price
      }
      if (object.color || object.size || object.capacity) {
        function isEqual(object1, object2) {
            if (object1 === undefined) return false
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
        const objSize = cart.filter(item => item.size === object.size).find(item => item.size === object.size)
        const objColor = cart.filter(item => item.color === object.color).find(item => item.color === object.color)
        const objCapacity = cart.filter(item => item.capacity === object.capacity).find(item => item.capacity === object.capacity)


          if(isEqual(objSize, object) && isEqual(objColor, object) && isEqual(objCapacity, object)) {
            setCart((cart) => {
              return cart.map((product) => {
              if(product.name===object.name) {
                return {
                  ...product,
                  counter: product.counter + 1,
                  totalCount: Math.trunc(((product.counter + 1) * product.price) * 100) / 100
                }
              }
              return product
              })
            })
          } else {
            setCart(cart=> [...cart, object])
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
        <div>
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
                        onClick={() => setSelectedSize(size.value)}
                        key={size.id}
                        className={selectedSize === size.value ? 'active' : ''}>{size.value}</button>
                    )
                  }
                </div>
              </div>)
              : capacity.length > 0 && (<div className='pdp-right-content__sizes'>
              <h3>Capacity:</h3>
              <div className='pdp-right-content__sizes-buttons capacity'>
                {
                  capacity.map(capacity =>
                    <button
                      onClick={() => setSelectedCapacity(capacity.value)}
                      key={capacity.id}
                      className={selectedCapacity === capacity.value ? 'active' : ''}>{capacity.value}</button>)
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
            <span>{currency}{price}</span>
            <button
              onClick={addProductToCart}
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
  )
}

export default PDP