import React from 'react';

import './SideBar.css';

function CartCard(props) {
  const {
    cartItem,
    currency,
    addToCart,
    removeFromCart,
    decrementProduct,
  } = props;
  return (
    <div className='cartCard'>
      <div className='cardDescription'>
        <h3>{cartItem.title}</h3>
        <div className='lowerDescripiton'>
          <div className='cartCount'>
            <span
              className='cartCountMinus'
              onClick={() => decrementProduct(cartItem)}>
              -
            </span>
            <span>{cartItem.quantity}</span>
            <span className='cartCountPlus' onClick={() => addToCart(cartItem)}>
              +
            </span>
          </div>
          <div>
            <span>
              {currency === 'USD' ? '$' : currency}{cartItem.price}
            </span>
          </div>
        </div>
      </div>
      <div className='cartImageContainer'>
        <div className='removeItem' onClick={() => removeFromCart(cartItem)}>
          <span>x</span>
        </div>
        <img className='cartImage' src={cartItem.image_url} alt='cart item'/>
      </div>
    </div>
  );
}

export default CartCard;
