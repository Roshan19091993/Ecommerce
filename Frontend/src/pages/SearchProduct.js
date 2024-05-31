import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import summaryApi from '../common';
import VerticalCard from '../components/VerticalCard';

const SearchProduct = () => {
  const location = useLocation();
  
  const [data,setData]= useState([]);
  const [loading,setLoading]= useState(false);

  const query = location.search;
  console.log("query:", query);

  const fetchProduct = async () => {

      setLoading(true);
      const response = await fetch(summaryApi.searchProduct.url + query, {
        method: summaryApi.searchProduct.method,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const dataResponse = await response.json();
      setLoading(false);
      setData(dataResponse.data);
    //   console.log("dataResponse:", dataResponse);
   
  };

  useEffect(() => {
    fetchProduct();
  }, [query]);

  return (
    <div className='container mx-auto p-4'>
        {
            loading &&(
                <p className='text-3xl text-center animate-pulse'>Loading.....</p>
            )
        }
       <p className='text-lg font-semibold my-3 '>Search Result:{data.length}</p>
        {
            data.length === 0 && !loading &&(
                <p className='bg-white text-3xl text-center p-4'>NO Data Found......</p>
            )
        }

        {
            data.length !== 0 && !loading &&(
                    <VerticalCard loading={loading} data={data}/>
                  
                )    
        }
    </div>
  );
};

export default SearchProduct;
