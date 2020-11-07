import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { CURRENCY, PRODUCTS } from './Queries';
import _ from 'lodash';

import NavBar from './Components/NavBar/NavBar';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import SideBar from './Components/SideBar/SideBar';
import Loader from './Components/Loader/Loader';
import './App.css';

function App() {
  const { data } = useQuery(CURRENCY);

  const [currency, setCurrency] = useState(
    data && data.currency.length ? data.currency[0] : 'USD'
  );

  const { data: items, refetch, loading: productLoading } = useQuery(PRODUCTS, {
    variables: { currency },
    fetchPolicy: 'network-only',
    notifyOnNetworkStatusChange: true,
  });

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [newItem, setNewItem] = useState(false);

  useEffect(() => {
    let newCart = _.cloneDeep(cart);
    let newTotal = 0;
    newCart.forEach((ct) => {
      const foundProduct = items.products.find((pd) => ct.id === pd.id);
      if (foundProduct) {
        ct.price = foundProduct.price;
        newTotal = newTotal + Number(ct.price * ct.quantity);
      }
    });
    setCart(newCart);
    setTotal(newTotal);
  }, [items]);

  const addToCart = (product) => {
    let newCart = _.cloneDeep(cart);
    const currentProduct = newCart.find((ct) => product.id === ct.id);
    if (!currentProduct) {
      let newProduct = _.cloneDeep(product);
      newProduct.quantity = 1;
      newCart.push(newProduct);
      setTotal(total + Number(product.price));
    } else {
      setTotal(total + Number(product.price));
      currentProduct.quantity++;
    }
    setCart(newCart);
    setNewItem(true);
  };

  const removeFromCart = (product) => {
    let newCart = _.cloneDeep(cart);
    const currentProductIndex = newCart.findIndex((ct) => product.id === ct.id);
    setTotal(total - Number(product.price * product.quantity));
    newCart.splice(currentProductIndex, 1);
    setCart(newCart);
  };

  const decrementProduct = (product) => {
    let newCart = _.cloneDeep(cart);
    const currentProduct = newCart.find((ct) => product.id === ct.id);
    if (currentProduct && currentProduct.quantity === 1) {
      removeFromCart(product);
    } else {
      currentProduct.quantity--;
      setTotal(total - Number(product.price));
      setCart(newCart);
    }
  };

  return (
    <React.Fragment>
      <div className='App'>
        <NavBar cart={cart} setNewItem={setNewItem} />
        {!productLoading ? (
          <ProductsPage
            currencies={data ? data.currency : {}}
            currency={currency}
            setCurrency={setCurrency}
            setCart={setCart}
            setNewItem={setNewItem}
            cart={cart}
            addToCart={addToCart}
            items={items}
          />
        ) : (
          <Loader />
        )}
        <SideBar
          currencies={data ? data.currency : []}
          currency={currency}
          setCurrency={setCurrency}
          cart={cart}
          newItem={newItem}
          setCart={setCart}
          setNewItem={setNewItem}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          decrementProduct={decrementProduct}
          total={total}
          refetch={refetch}
          productLoading={productLoading}
        />
      </div>
    </React.Fragment>
  );
}

export default App;
