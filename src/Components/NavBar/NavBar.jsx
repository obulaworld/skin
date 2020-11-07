import React from 'react';

import luminLogo from '../../assets/lumin.png';
import cartImage from '../../assets/cart.png';
import './NavBar.css';

function NavBar(props) {
  const { cart, setNewItem } = props;
  return (
    <div className='navbar'>
      <div className='firstMenu'>
        <div>
          <img className='logo' src={luminLogo} alt='lumin' />
        </div>
        <div className='firstMenuItem item'>
          <span>Shop</span>
        </div>
        <div className='firstMenuItem item'>
          <span>Help</span>
        </div>
        <div className='item'>
          <span>Blog</span>
        </div>
      </div>
      <div className='secondMenu'>
        <div className='secondMenuItem item'>
          <span>Account</span>
        </div>
        <div className='item cartContainer' onClick={() => setNewItem(true)}>
          <img className='cart' src={cartImage} alt='cart' />
          <span>{cart.length}</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
