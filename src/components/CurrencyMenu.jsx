import React from 'react';
import {useQuery} from "@apollo/client";
import {gql} from '@apollo/client'

export const GET_ALL_CURRENCY = gql`
    query {
        currencies {
            label, symbol
        }
    }
`

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

