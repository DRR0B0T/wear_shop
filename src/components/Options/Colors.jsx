import React from 'react';
import Button from "../Button";

const Colors = ({
                  colors,
                  setSelectedColor,
                  selectedColor,
                  className,
                  container
                }) => {


  return (
    <>
      {
        colors.length
          ? (
            <div className={container}>
              <h3 style={{marginTop: 10, marginBottom: 10}}>Color:</h3>
              {
                colors.map(color =>
                  <Button
                    color={color.value}
                    key={color.id}
                    style={{background: `${color.value}`}}
                    onClick={() => setSelectedColor(color.id)}
                    className={selectedColor === color.id
                      ? `${className} active`
                      : `${className}`}
                  />
                )
              }
            </div>)
          : null
      }
    </>
  );
};

export default Colors;
