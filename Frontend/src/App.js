import React, { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';

const App = () => {
  const dispatch = useDispatch();
  const [cartProductCount, setCartProductCount] = useState(0);

  const fetchUserDetails = async () => {
    try {
      const dataResponse = await fetch(summaryApi.current_user.url, {
        method: summaryApi.current_user.method,
        credentials: 'include',
      });
      const dataApi = await dataResponse.json();

      if (dataApi.success) {
        dispatch(setUserDetails(dataApi.data));
      } else {
        console.error('Failed to fetch user details:', dataApi.message);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchUserAddToCart = async () => {
    try {
      const dataResponse = await fetch(summaryApi.addToCartProduct.url, {
        method: summaryApi.addToCartProduct.method,
        credentials: 'include',
      });

      if (!dataResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const dataApi = await dataResponse.json();
      if (dataApi.success) {
        setCartProductCount(dataApi.data.length || 0); // Use length if data is an array
      } else {
        console.error('Failed to fetch cart data:', dataApi.message);
      }
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const incrementCartCount = () => {
    setCartProductCount((prevCount) => prevCount + 1);
  };

  const decrementCartCount = () => {
    setCartProductCount((prevCount) => prevCount - 1);
  }

  useEffect(() => {
    fetchUserDetails();
    fetchUserAddToCart();
  },[]);

  return (
    <>
      <Context.Provider
        value={{
          fetchUserDetails, // user details fetch
          cartProductCount, // current user add to cart product count
          fetchUserAddToCart, // current user add to cart product count
          incrementCartCount, // Pass the increment function
          decrementCartCount, // Pass the decrement function
        }}
      >
        <ToastContainer />
        <Header cartProductCount={cartProductCount} />
        <main className="min-h-[calc(100vh-120px)] pt-24">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
};

export default App;
