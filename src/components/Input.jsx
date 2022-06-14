import React from 'react'
import { AppContext } from '../App'

const Input = ({ id, counter }) => {
  const { setCart } = React.useContext(AppContext)

  const handleClickPlus = () => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            counter: product.counter + 1,
            totalCount: ((product.counter + 1) * product.price).toFixed(2)
          }
        }
        return product
      })
    })
  }

  const handleClickMinus = () => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          if (product.counter === 1)setCart(cart => cart.filter(product => product.id !== id))
          return {
            ...product,
            counter: product.counter - 1 > 1 ? product.counter - 1 : 1,
            totalCount: ((product.counter - 1 > 1 ? product.counter - 1 : 1) * product.price).toFixed(2)
          }
        }
        return product
      })
    })
  }

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map(product => {
        if (product.id === id) {
          if (product.counter === 1)setCart(cart => cart.filter(product => product.id !== id))
          return {
            ...product,
            counter: value,
            totalCount: (value * product.price).toFixed(2)
          }
        }
        return product
      })
    })
  }

  return (
    <>
      <button
        onClick={handleClickPlus}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <input
        onChange={(e) => changeValue(id, +e.target.value)}
        value={counter}
      />
      <button
        onClick={handleClickMinus}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </>
  )
}

export default Input
