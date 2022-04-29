import React from 'react';


const CurrencyMenu = ({currency, value, onChange, setClick, click}) => {

  return (
          <select
            className='classic'
            value={value}
            onChange={event => onChange(event.target.value)}
            onClick={()=> setClick(!click)}
          >

            <option value={value}>{value}</option>
            {
              currency.map(options => (

            <option
              value={options.symbol}
              key={options.symbol}
            >
              {options.symbol}  {options.label}
            </option>
              ))
            }

          </select>
  );
};

export default CurrencyMenu;

