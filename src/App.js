import React from 'react'
import {Route, Routes} from 'react-router-dom'

import './scss/App.scss';
import Layout from "./components/Layout";
import Error from "./components/Error";
import PDP from "./pages/PDP";
import Category from "./pages/Category";
import Cart from "./pages/Cart";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Category/>}/>
            <Route path='pdp' element={<PDP/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route  path='*'   element={<Error/>} />
          </Route>
        </Routes>
      </div>
  );
}

export default App;
