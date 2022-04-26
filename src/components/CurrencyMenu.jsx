import React from 'react';

const CurrencyMenu = ({currencyOpened}) => {
  return (
    <div >
      <ul className={currencyOpened ? 'currency-menu' : 'currency-menu hidden'} >
        <li>$ USD</li>
        <li>€ EUR</li>
        <li>¥ JPY</li>
      </ul>
    </div>
  );
};

export default CurrencyMenu;

