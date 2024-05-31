import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import CategoryWiseProductDisplay from '../components/CategoryWiseProductDisplay';
import summaryApi from '../common';
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import displayINRCurrency from '../helpers/displayCurrency';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const ProductDetails = () => {

    const [data,setData] =useState({
            productName:" ",
            brandName:" ",
            category: "",
            productImage: [],
            price: "",
            sellingPrice: "",
            quantity: " ",
            description: " "
    });

    const params = useParams();
    const [loading,setLoading] = useState(true);
    const productImageListLoading = new Array(4).fill(null);
    const [activeImage,setActiveImage] = useState("");

    const [zoomImageCordinate,setZoomImageCordinate] = useState({
      x: 0,
      y: 0
    })

    const [zoomImage,setZoomImage] = useState(false);

    const { incrementCartCount } = useContext(Context);

    const navigate =useNavigate();
  

    const fetchProductDetails = async()=>{
        setLoading(true);
      const response = await fetch(summaryApi.productDetails.url,{
        method: summaryApi.productDetails.method,
      
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: params?.id
        })
      })
      setLoading(false);
      const dataResponce = await response.json();

      setData(dataResponce?.data);
      setActiveImage(dataResponce?.data?.productImage[0]);

    }
    console.log("data",data);

    useEffect(()=>{
      fetchProductDetails();
    },[params]);

    const handleMouseEnterProduct = (imageURL)=>{
      setActiveImage(imageURL);
    }
const handleZoomImage = useCallback((e)=>{
  setZoomImage(true);
  const {left,top,width,height} = e.target.getBoundingClientRect();
  console.log("cordinate",left,top,width,height);
  
  const x = ((e.clientX - left) / width) * 100;
  const y = ((e.clientY - top) / height) * 100;
  setZoomImageCordinate({x,y});
 

},[zoomImageCordinate])

const handleLeaveImageZoom = () => {
  setZoomImage(false);
 }
 
  const handleAddToCart = async(e,id) => {
      await addToCart(e,id);
      incrementCartCount();
  };

  const handleBuyProduct = async(e,id) => {
    await addToCart(e,id);
    incrementCartCount();
    // window.location.href = "/cart";
    navigate('/cart');
  };


  return (
    <div className='container mx-auto p-4'>
      <div className=' min-h-[200px] flex flex-col lg:flex-row gap-4'>
        {/**product Image */}
        <div className='h-96 flex flex-col lg:flex-row-reverse gap-4'>
          <div className='h-[300px] w-[300px] my-4  lg:h-96 lg:w-96 bg-slate-200 p-4' >
            <img src={activeImage} className='h-full w-full object-scale-down mix-blend-multiply'
              onMouseMove={handleZoomImage}
              onMouseLeave ={handleLeaveImageZoom}
              />             
            {/**Product Zoom */}
            {
              zoomImage &&(
                <div className="absolute -mx-18  top-16 gap-6 my-14 -right-[-710px] min-w-[400px] min-h-[400px] overflow-hidden bg-slate-400  p-4 hidden lg:block hover:block">
                <div
                className='w-full h-full   min-w-[400px] min-h-[400px]  bg-slate-200 bg-blend-multiply scale-125'
                style={{
                  background: `url(${activeImage})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: `${zoomImageCordinate.x}% ${zoomImageCordinate.y}%`,
                  backgroundSize: '200%',
                  cursor: 'pointer',
                  
                }}
                >
                </div>
              </div>
              )
            }
          
          </div>
          <div className='h-full'>
          {
              loading ?(
                  <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-hidden h-full'>
                    {
                          productImageListLoading.map(el =>{
                            return(
                              <div className='h-20 w-20 bg-slate-200 rounded animate-pulse' key={"loadingImage"}>
                                
                              </div>
                            )
                         })
                    }
                  </div>  
              ):(
            
                <div className='flex gap-2 lg:flex-col overflow-scroll scrollbar-hidden h-full'>
                {
                     data.productImage && data.productImage?.length > 0 ? (
                    data?.productImage?.map((imgURL, index) => {
                    return(
                      <div className='h-20 w-20 bg-slate-200 rounded p-1' key={imgURL}>
                      <img src={imgURL} 
                      className='w-full h-full object-scale-down mix-blend-multiply cursor-pointer'
                       onClick={()=>handleMouseEnterProduct(imgURL)}
                       />
                    </div>
                    )
                  })):(
                    <div className='h-20 w-20 bg-slate-200 rounded'>
                        No images available
                  </div>
                  )
                }
                </div>  
              )
          }   
      
        </div>
      </div >
        {/*product details */}
      {
        loading ?(
          <div className='grid gap-1 w-full'>
            
          <p className='bg-slate-200 animate-pulse h-6 w-full lg:8 rounded-full inline-block '></p>
          <br></br>
          <h2 className='text-2xl lg:text-4xl  font-medium h-6 w-full lg:8 bg-slate-200 rounded-full'></h2>
          <br></br>
          <p className='capitalize text-2xl text-slate-400 h-6 lg:8 min-w-[100px] animate-pulse bg-slate-200 rounded-full'></p>
          <br></br>
          <div className='text-red-600 bg-slate-200 h-6 lg:8 animate-pulse flex items-center gap-1'>
             
          </div>
          <br></br>
          <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1 h-6 lg:8 animate-pulse'>
            <p className='text-red-600 bg-slate-200 h-6 lg:8 animate-pulse'></p>
            <p className='text-slate-400 line-through bg-slate-200 h-6  lg:8 animate-pulse'></p>
          </div>
         
          <div className='flex items-center gap-3 my-2 w-full'>
            <button className='h-6 bg-slate-200 rounded animate-pulse lg:8 w-full'></button>
            <button  className='h-6 bg-slate-200 rounded animate-pulse lg:8 w-full'></button>
          </div>
          <div className='w-full'>
            <p className='text-slate-600 font-medium my-1 lg:8 h-6 bg-slate-200 rounded animate-pulse'></p>
            <p className='h-10 lg:h-12 bg-slate-200 rounded  animate-pulse'></p>
          </div>

      </div>
        ):(
          <div>
          <p className='bg-yellow-300 text-2xl text-black px-2 rounded-full inline-block '>{data?.brandName}</p>
          <br></br>
          <h2 className='text-2xl lg:text-4xl  font-medium'>{data?.productName}</h2>
          <br></br>
          <p className='capitalize text-2xl text-slate-400 '>{data?.category}</p>
          <br></br>
          <div className='text-red-600 flex items-center gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalf />
          </div>
          <br></br>
          <div className='flex items-center gap-2 text-2xl lg:text-3xl font-medium my-1'>
            <p className='text-red-600'>{displayINRCurrency(data?.sellingPrice)}</p>
            <p className='text-slate-400 line-through'>{displayINRCurrency(data?.price)}</p>
          </div>
          <br></br>
          <div className='flex items-center gap-3 my-2'>
            <button className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white' onClick={(e)=>handleBuyProduct(e , data?._id)}>Buy</button>
            <button  className='border-2 border-red-600 rounded px-3 py-1 min-w-[120px] font-medium  text-white bg-red-600 hover:text-red-600 hover:bg-white' onClick={(e)=>handleAddToCart(e,data?._id)}>Add to Cart</button>
          </div>
          <div className=''>
            <p className='text-slate-600 font-medium my-1'>Description:</p>
            <p className='text-1xl'>{data?.description}</p>
          </div>

      </div>
        )
      }
    </div>
    {/* {
      data.category&&(
        <CategoryWiseProductDisplay category={data?.category} heading={"Recomended Product"}/>
      )
    } */}
    </div>
  )
}

export default ProductDetails





