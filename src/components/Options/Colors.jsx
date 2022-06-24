import React from 'react';
import Button from "../Button";
import {AppContext} from "../../App";

const Colors = ({className, container, colors, selectedColor}) => {

  const {setSelectedColor} = React.useContext(AppContext)
  return (
    <>
      {
        colors.length > 0
          ? (
            <div>
              <h3 style={{marginTop: 10, marginBottom: 10}}>Color:</h3>
              <div className={container}>


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
              </div>
            </div>)
          : null
      }
    </>
  );
};

export default Colors;
