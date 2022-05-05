import React from 'react';


const CurrencyMenu = ({currency,  setClick, click}) => {
  const [selectedSort, setSelectedSort] = React.useState('')
  const sortValue = (event) => {
     setSelectedSort(event.target.value.slice(0, 2))
  }

  return (
          <select
            value={selectedSort}
            onChange={sortValue}
            onClick={()=> setClick(!click)}
          >
            <option>{selectedSort}</option>
            {
              currency.map((options,index) => (
            <option
              key={index}
            >
              {options.symbol} {options.label}
            </option>
              ))
            }
          </select>
  );
};

export default CurrencyMenu;

