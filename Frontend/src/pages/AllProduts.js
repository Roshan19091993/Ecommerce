import React, { useEffect, useState } from 'react';
import UploadProduct from '../components/UploadProduct';
import summaryApi from '../common';
import AdminProductCard from '../components/AdminProductCard';

const AllProduts = () => {

  const [openUploadProduct, setOpenUploadProduct] = useState(false);
  const [allProduct, setAllProduct] = useState([]);

    const fetchAllProduct = async()=>{
      const response = await fetch(summaryApi.allProduct.url);
       
      const dataResponse = await response.json();
      console.log("Produc Data:",dataResponse);

      setAllProduct(dataResponse?.data || [])
      }
    
      useEffect(()=>{
        fetchAllProduct();
      },[]);

   return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
          <h2 className='font-bold text-lg'>All Produts</h2>
          <button className='border-2 border-yellow-600  hover:bg-yellow-600 hover:text-black transition-all py-1 px-3 rounded-full'onClick={()=>setOpenUploadProduct(true)}>Upload Products</button>
          </div>
            {/**all products */}
            <div className='flex items-center flex-wrap gap-9 py-4 h-[calc(100vh-190px)] overflow-y-scroll'>
              {
               allProduct.map((product, index) => {  
          
                return(
                  <AdminProductCard data={product} key={index+"allProduct"} fetchdata={ fetchAllProduct}/>
                  
                )
               })
              }
            </div>

     
       {/**upload product component */}

        {
          openUploadProduct &&(
            <UploadProduct onClose={()=>setOpenUploadProduct(false)} fetchData={fetchAllProduct}/>
          )
        }
    </div>
  )
}

export default AllProduts