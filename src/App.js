import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useQuery } from '@apollo/client'

import './scss/App.scss'
import Layout from './components/Layout'
import Error from './pages/Error'
import PDP from './pages/PDP'
import Category from './pages/Category'
import Cart from './pages/Cart'
import { GET_ALL_DATA } from './hooks/useAllData'
import Spinner from './components/Spinner'

export const AppContext = React.createContext({})

function App () {
  const { data, loading, error } = useQuery(GET_ALL_DATA)

  const [categoryName, setCategoryName] = React.useState('')
  const [amount, setAmount] = React.useState([])
  const [cart, setCart] = React.useState([])
  const [currency, setCurrency] = React.useState('$')
  const [objectCurrency, setObjectCurrency] = React.useState('')
  const [visible, setVisible] = React.useState(false)
  const [cartOpened, setCartOpened] = React.useState(false)
  const [price, setPrice] = React.useState(0)


  const [selectedColor, setSelectedColor] = React.useState('')
  const [selectedSize, setSelectedSize] = React.useState('')
  const [selectedCapacity, setSelectedCapacity] = React.useState('')
  const [selectedPort, setSelectedPort] = React.useState('')
  const [selectedTouchId, setSelectedTouchId] = React.useState('')


  const [total, setTotal] = React.useState({
    tax: 0,
    counter: 0,
    price: 0
  })

  React.useEffect(() => {
    if (!loading) {
      setAmount(data.categories[0].products
        .map(item => item.prices)
        .flat()
        .filter(item => item.currency.symbol === currency))
    }
    setTotal({
      tax: cart.reduce((prev, current) => {
        return prev + parseFloat(current.totalCount) / 100 * 21
      }, 0),
      counter: cart.reduce((prev, current) => {
        return prev + current.counter
      }, 0),
      price: cart.reduce((prev, current) => {
        return prev + parseFloat(current.totalCount)
      }, 0)
    })
  }, [categoryName, data, loading, currency, cart])

  if (loading) return <Spinner/>
  if (error) return `Error ${error.message}`

  return (
    <AppContext.Provider value={{
      currency,
      setCurrency,
      visible,
      setVisible,
      amount,
      cart,
      setCart,
      price,
      setPrice,
      setObjectCurrency,
      objectCurrency,
      total,
      setTotal,
      cartOpened,
      setCartOpened,
      selectedColor,
      setSelectedColor,
      selectedSize,
      setSelectedSize,
      selectedCapacity,
      setSelectedCapacity,
      selectedPort, setSelectedPort,
      selectedTouchId, setSelectedTouchId
    }}>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Layout
              data={data}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
          />
          }>
            <Route index element={
              <Category
              amount={amount}
              categoryName={categoryName}
              />
            }/>
            <Route path='pdp/:id/:name' element={<PDP/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App
