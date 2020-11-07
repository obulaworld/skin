import React from 'react';

import Card from '../Card/Card';

import './ProductsPage.css';

function ProductsPage(props) {
  const { currency, addToCart, items } = props;

  return (
    <div className='productsPageWrapper'>
      <section className='productsPage'>
        <div className='caption'>
          <span className='captionTitle'>All Products</span>
          <span className='captionText'>A 360 look at Lumin</span>
        </div>
        <div>
          <select className='select' disabled>
            <option className='option' value=''>
              Filter by
            </option>
          </select>
        </div>
      </section>
      <section className='productsContainer'>
        {items &&
          items.products &&
          items.products.map((product, index) => (
            <div className='card' key={index}>
              <Card
                product={product}
                addToCart={addToCart}
                currency={currency}
              />
            </div>
          ))}
      </section>
      <section className='right-cart'></section>
    </div>
  );
}

export default ProductsPage;
