import React from 'react';
import wear from '../assets/img/image4.png'

const PDP = () => {
  return (
      <div className="pdp">
        <div className="pdp-left">
          <div className='pdp-left__images'>
            <img className='pdp-left__images_img' src={wear} alt="Product"/>
            <img className='pdp-left__images_img' src={wear} alt="Product"/>
            <img className='pdp-left__images_img' src={wear} alt="Product"/>
          </div>
        </div>
        <div className="pdp-right">
          <div className="pdp-right-main-img">
            <img src={wear} alt="Product"/>
          </div>
          <div className='pdp-right-content'>
            <div className="pdp-right-content__header">
              <h2>Apollo</h2>
              <span>Running Short</span>
            </div>
            <div className='pdp-right-content__sizes'>
              <h3>Size:</h3>
              <div className='pdp-right-content__sizes-buttons'>
                <button className='disabled'>XS</button>
                <button className='active'>S</button>
                <button>M</button>
                <button>L</button>
              </div>
              <h3 style={{marginTop: 10}}>Color:</h3>
              <div className='pdp-right-content__sizes-colors'>
                <button className='pdp-right-content__sizes-colors-btn grey'></button>
                <button className='pdp-right-content__sizes-colors-btn brown'></button>
                <button className='pdp-right-content__sizes-colors-btn green active'></button>
              </div>
            </div>
            <div className="pdp-right-content__price">
              <h3>Price</h3>
              <h4>$50</h4>
              <button>
                Add to cart
              </button>
            </div>
            <div className="pdp-right-content__footer">
              <p>
                Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PDP;
