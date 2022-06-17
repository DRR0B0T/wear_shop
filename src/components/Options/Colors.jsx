import React from 'react';
import Button from "../Button";

const Colors = ({
                  colors,
                  setSelectedColor,
                  selectedColor
                }) => {



  return (
    <>
      {
        colors.length
          ? (<div className={'pdp-right-content__colors'}>
            <h3 style={{marginTop: 10}}>Color:</h3>
            {
              colors.map(color =>
                <Button
                  color={color.value}
                  key={color.id}
                  style={{background: `${color.value}`}}
                  onClick={() => setSelectedColor(color.id)}
                  className={selectedColor === color.id
                    ? 'pdp-right-content__colors-btn active'
                    : 'pdp-right-content__colors-btn'}
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
