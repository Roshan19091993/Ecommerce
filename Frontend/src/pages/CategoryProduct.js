import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import productCategory from '../helpers/productCategory'
import VerticalCard from '../components/VerticalCard';
import summaryApi from '../common';

const CategoryProduct = () => {
    
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false);
    const location  = useLocation();

    const urlSearch = new URLSearchParams(location.search);

    const urlCategoryListinArray = urlSearch.getAll("category");

    const urlCategoryListObject = {};

    urlCategoryListinArray.forEach(el=>{
      urlCategoryListObject[el] = true;
    })

    const [selectCategory,setSelectCategory] = useState([urlCategoryListObject]);
    const [filterCategoryList,setFilterCategoryList] = useState([]);

    const [sortBy,setSortBy]= useState("");

    console.log("sortBy", sortBy)

    const fetchData = async () => {
      const response = await fetch(summaryApi.filterProduct.url,{
        method:summaryApi.filterProduct.method, 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: filterCategoryList
        })
      });

      const dataResponse = await response.json();
      setData(dataResponse?.data || []);
      console.log(dataResponse);

    }

    const handleSelectCategory = (e) =>{

      const {name,value,checked} = e.target;

      setSelectCategory((preve)=>{
        return{
          ...preve,
          [value]: checked 
        }
      })
    }
  
    useEffect(()=>{
      fetchData();
    },[filterCategoryList])

    useEffect(()=>{
      const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName=>{

        if(selectCategory[categoryKeyName] === true){
          return categoryKeyName;
        }
        return null;
      }).filter(el=>el)

      setFilterCategoryList(arrayOfCategory);

      //format for url change when change on checkbox
      const urlFormat = arrayOfCategory.map((el,index)=>{

        if((arrayOfCategory.length - 1) === index){
          return `category=${el}`;
        }
        return `category=${el}&&`;
      })
      navigate("/product-category?"+urlFormat.join(""))
    },[selectCategory]);

    const handleOnChangeSortBy = (e) =>{
      const {value} = e.target;
      
      setSortBy(value);

      if(value === 'asc'){
        setData(prev=>prev.sort((a,b)=>a.sellingPrice - b.sellingPrice))
      }

      if(value === 'dsc'){
        setData(prev=>prev.sort((a,b)=>b.sellingPrice - a.sellingPrice))
      }
    }

    useEffect(()=>{
      
    },[sortBy])

  return (
    <div className='container mx-auto p-4'>
       {/***Desktop Version */}
       <div className='hidden lg:grid grid-cols-[200px,1fr]'>
        {/**Left Side */}
        <div className='bg-white p-2 min-h-[calc(100vh-120px)] overflow-y-scroll'>
          {/*Sort by*/}
              <div className=''>
                 <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Sort by</h3>
              <from className="text-sm flex flex-col gap-2 py-2">
                <div className='flex items-center gap-3'>
                  <input type="radio" name="sortBy" checked={sortBy === 'asc'}  onChange={handleOnChangeSortBy} value={"asc"}/>
                  <label>Price-low to High</label>
                </div>
                <div className='flex items-center gap-3'> 
                  <input type="radio" name="sortBy" checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value={"dsc"}/>
                  <label>Price-High to Low</label>
                </div>
              </from>
              </div>
               {/*Filter by*/}
               <div className=''>
                 <h3 className='text-base uppercase font-medium text-slate-500 border-b pb-1 border-slate-300'>Category</h3>
              <from className="text-sm flex flex-col gap-2 py-2">
               {
                productCategory.map((categoryName,index)=>{
                  return(
                    <div className='flex items-center gap-3'>
                      <input type='checkbox' name={"category"}
                       checked={selectCategory[categoryName?.value]}
                       value={categoryName?.value} 
                       id={categoryName?.value}
                        onChange={handleSelectCategory}
                        />
                      <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                    </div>
                  )
                })
               }
              </from>
              </div>
        </div>
        {/**Right Side (product) */}
          <div className='px-4'>
          <p className='font-medium text-slate-800 text-lg my-2'>Search Result:{data.length} </p>
           <div className='min-h-[calc(100vh-120px)] overflow-y-scroll max-h-[calc(100vh-120px)]'>
           {
              data.length !== 0 && (
                <VerticalCard data={data} loading={loading}/>
              )
            }
          </div>    
         </div>

       </div>
    </div>
  )
}

export default CategoryProduct