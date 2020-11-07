import React from 'react';

import './Card.css';

function Card(props) {
  const { product, addToCart, currency } = props;
  return (
    <div>
      <div className='cardImageContainer'>
        <img className='image' src={product.image_url} alt='product'/>
      </div>
      <div className='cardTitle'>
        <h3>{product.title}</h3>
      </div>
      <div className='cardText'>
        <p>
          From {currency === 'USD' ? '$' : currency} {product.price}
        </p>
      </div>
      <div className='actionButton' onClick={() => addToCart(product)}>
        <div className='addButton'>Add to Cart</div>
      </div>
    </div>
  );
}

export default Card;
