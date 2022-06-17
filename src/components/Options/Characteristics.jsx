import React from 'react';
import Button from "../Button";

const Characteristics = ({
                           setSelectedSize,
                           setSelectedCapacity,
                           sizes,
                           capacity,
                           selectedSize,
                           selectedCapacity
                         }) => {
  return (
    <>
      {
        sizes.length > 0
          ? (<div className='pdp-right-content__sizes'>
            <h3>Size:</h3>
            <div className='pdp-right-content__sizes-buttons'>
              {
                sizes.map(size =>
                  <Button
                    props={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    key={size.id}
                    className={selectedSize === size.value ? 'active' : ''}/>
                )
              }
            </div>
          </div>)
          : capacity.length > 0 && (<div className='pdp-right-content__sizes'>
          <h3>Capacity:</h3>
          <div className='pdp-right-content__sizes-buttons capacity'>
            {
              capacity.map(capacity =>
                <Button
                  props={capacity.value}
                  onClick={() => setSelectedCapacity(capacity.value)}
                  key={capacity.id}
                  className={selectedCapacity === capacity.value ? 'active' : ''}/>)
            }
          </div>
        </div>)
      }
    </>
  );
};

export default Characteristics;
