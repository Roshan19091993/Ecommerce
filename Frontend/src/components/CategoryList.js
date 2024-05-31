import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import summaryApi from '../common';
import { Link } from 'react-router-dom';

const CategoryList = () => {

    const [categoryProduct, setCategoryProduct] = useState([]);
    const [loading,setLoading]=useState(false);

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProdcut = async()=>{
        setLoading(true);
        const response = await fetch(summaryApi.categoryProduct.url);
        const dataResponse = await response.json()
        setLoading(false);
        setCategoryProduct(dataResponse.data);
    }

    useEffect(()=>{
        fetchCategoryProdcut();

    },[])

  return (
    <div className='container mx-auto p-5'>
        <div className='flex flex-wrap items-center gap-4 justify-between overflow-scroll scrollbar-hidden '>
            {
                loading ? (
                   
                        categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                    
                                </div>
                            )
                        })
                ):(
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link to={'/product-category?category='+product?.category} className='cursor-pointer' key={product?.category} >
                                <div className=' w-16 h-16  md:w-20 md:h-20 rounded-full overflow-hidden p-3 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.productImage[0]}  className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </Link>
                        )
                    })
                )
            }
            
            </div>
        </div>
    ) 
               
}
export default CategoryList

