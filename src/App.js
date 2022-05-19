import React from 'react'
import {Route, Routes} from 'react-router-dom'

import './scss/App.scss';
import Layout from "./components/Layout";
import Error from "./components/Error";
import PDP from "./pages/PDP";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import {useAllData} from "./hooks/useAllData";


function App() {
  const {data, loading, error} = useAllData()
  const [categoryName, setCategoryName] = React.useState('all')
  const [newData, setNewData] = React.useState([])
  React.useEffect(()=>{
    if(!loading) setNewData(data.categories.find(item=>item.name.includes(categoryName)).products)
  },[categoryName, data, loading])

  if(loading) return <h1>Loading...</h1>
  if (error) return `Error ${error.message}`

  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout
            data={data}
            categoryName={categoryName}
            setCategoryName={setCategoryName}
          />}>
            <Route index element={<Category
            newData={newData}
            categoryName={categoryName}
            />}/>
            <Route path='pdp/:id/:name' element={<PDP/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route  path='*'   element={<Error/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
