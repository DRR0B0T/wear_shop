import React from 'react';
import {useQuery} from "@apollo/client";
import {GET_ALL_CURRENCY} from "../query/allData";


const CurrencyMenu = ({ setClick, click}) => {
  const {data,loading,error} = useQuery(GET_ALL_CURRENCY)
  const [selectedSort, setSelectedSort] = React.useState('')

  function sortValue ({target})  {
     setSelectedSort(target.value)
  }

  if(error) return  `Error! ${error.message}`

  return (
          <select
            value={selectedSort}
            name="currency"
            onChange={sortValue}
            onClick={()=> setClick(!click)}>
            <option>{selectedSort}</option>
            {
             !loading && data.currencies.map(options => (
            <option
              key={options.symbol}
              value={options.symbol}
            >
              {options.symbol} {options.label}
            </option>
              ))
            }
          </select>
  );
};

export default CurrencyMenu;

