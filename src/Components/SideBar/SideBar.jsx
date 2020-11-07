import React from 'react';

import Loader from '../Loader/Loader';
import CartCard from './CartCard';
import './SideBar.css';

function SideBar(props) {
  const {
    currencies,
    cart,
    currency,
    newItem,
    setNewItem,
    addToCart,
    removeFromCart,
    decrementProduct,
    total,
    refetch,
    setCurrency,
    productLoading,
  } = props;

  return (
    <div className={`sidebar ${newItem ? 'sideBarOpen' : ''}`}>
      <div className='actionHeader'>
        <span className='closebtn' onClick={() => setNewItem(false)}>
          {'>'}
        </span>
        <span className='cartHeader'>YOUR CART</span>
      </div>
      <div className='cartSelectContainer'>
        <select
          value={currency}
          className='cartSelect'
          onChange={(e) => {
            setCurrency(e.target.value);
            refetch();
          }}>
          <option className='option' value=''>
            Select
          </option>
          {currencies && currencies.length
            ? currencies.map((curr, index) => {
                return (
                  <option key={index} className='option' value={curr}>
                    {curr}
                  </option>
                );
              })
            : ''}
        </select>
      </div>
      {!productLoading ? (
        <>
          <div className='cartCardsContainer'>
            {cart.map((ct, index) => (
              <div key={index}>
                <CartCard
                  cartItem={ct}
                  currency={currency}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  decrementProduct={decrementProduct}
                />
              </div>
            ))}
          </div>
          <div className='cartTotalContainer'>
            <span>Subtotal</span>
            <span>
              {currency}
              {total}
            </span>
          </div>
        </>
      ) : (
        <Loader />
      )}
      <div className='checkoutButton'>
        <span>PROCEED TO CHECOUT</span>
      </div>
      <div className='none'></div>
    </div>
  );
}

export default SideBar;
