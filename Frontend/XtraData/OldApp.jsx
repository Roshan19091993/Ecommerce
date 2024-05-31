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

  const [cartProductCount,setCartProductCount]= useState(0);

  const fetchUserDetails = async()=>{

    const dataResponse = await fetch(summaryApi.current_user.url,{
      method: summaryApi.current_user.method,
      credentials:'include',
    })

    const dataApi = await dataResponse.json();

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
    // console.log("data-user",dataResponse);
  }

  const fetchUserAddToCart = async()=>{

    const dataResponse = await fetch(summaryApi.addToCartProduct.url,{
      method: summaryApi.addToCartProduct.method,
      credentials:'include',
    })

    const dataApi = await dataResponse.json();

    // if(dataApi.success){
    //   dispatch(setUserDetails(dataApi.data))
    // }
    // console.log("dataApi",dataApi);
    setCartProductCount(dataApi?.data?.count || 0);
  }

  

  useEffect(() => {
    // user Details
    fetchUserDetails();
    //user Details cart product
    fetchUserAddToCart();

  },[]);

  return (
  <>

  <Context.Provider value={{

    fetchUserDetails,//user details fetch
    cartProductCount,//current user add to cart product count
    fetchUserAddToCart,//current user add to cart product count

  }}>

    <ToastContainer />
    
  <Header/>
  <main className='min-h-[calc(100vh-120px)] pt-24'>
  <Outlet/>
  </main>
  <Footer/>
  </Context.Provider>
  </>
  );
}

export default App

