import React from 'react';

const Button = ({props, className, color, onClick}) => {

  return (
    <button
      onClick={onClick}
      style={{background: `${color}`}}
      className={className}
    >
      {props}
    </button>
  );
};

export default Button;
