import React from 'react';

const CurrencyMenu = ({currencyOpened, setCurrencyOpened}) => {
  return (
    <div
      className={currencyOpened ? 'modal active' : 'modal'}
      onClick={() => setCurrencyOpened(false)}>
      <ul
        className={currencyOpened ? 'currency-menu active' : 'currency-menu'}
        onClick={e => e.stopPropagation()}>
        <li>$ USD</li>
        <li>€ EUR</li>
        <li>¥ JPY</li>
      </ul>
    </div>
  );
};

export default CurrencyMenu;

