import React from 'react';
import {AppContext} from "../App";

const Input = ({id,inStock}) => {
  let {selectedProduct,setSelectedProduct} = React.useContext(AppContext)
  const itemLength = (id) => {
    return selectedProduct.filter(item=> item.id === id).length
  }

  const handleClickPlus = () => {
    const select = selectedProduct.find(item=>item.id === id)
    if(inStock)setSelectedProduct(prev => [...prev,select])
  }
  console.log(selectedProduct)
  const handleClickMinus = (id) => {
    const index = selectedProduct.indexOf(selectedProduct.find(item => item.id === id))

    setSelectedProduct(prev => [...prev,...prev.filter(item=>item.id===id).slice(0, prev.length - 1)])
    if(selectedProduct.length <= 1) setSelectedProduct(prev=> prev.filter(item=>item.id!== id))
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
        onChange={e=>e.target.value}
        value={itemLength(id)}/>
      <button
        onClick={()=>handleClickMinus(id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2"
             strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </>
  );
};

export default Input;
