import React from 'react'
import {Route, Routes} from 'react-router-dom'

import './scss/App.scss';
import Layout from "./components/Layout";
import Error from "./components/Error";
import PDP from "./pages/PDP";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import {useAllData} from "./hooks/useAllData";

export const AppContext = React.createContext({})

function App() {
  const {data, loading, error} = useAllData()
  const [categoryName, setCategoryName] = React.useState('all')
  const [newData, setNewData] = React.useState([])
  const [currency, setCurrency] = React.useState('$')
  const [visible, setVisible] = React.useState(false)
  const [amount, setAmount] = React.useState([])



  React.useEffect(()=>{

    if(!loading) {

      setNewData(data.categories.find(item => item.name.includes(categoryName)).products)
      setAmount(data.categories[0].products
        .map(item=>item.prices)
        .flat()
        .filter(item=> item.currency.symbol === currency))

    }
  },[categoryName, data, loading, currency])

  if(loading) return null
  if (error) return `Error ${error.message}`

  return (
    <AppContext.Provider value={{
      currency,
      setCurrency,
      visible,
      setVisible,
      amount
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
            <Route index element={<Category
              amount={amount}
            newData={newData}
            categoryName={categoryName}
            />}/>
            <Route path='pdp/:id/:name' element={<PDP/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route  path='*'   element={<Error/>} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
