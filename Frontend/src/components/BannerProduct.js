import React, { useEffect, useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import image1 from '../assest/banner/image1.jpg';
import image2 from '../assest/banner/image2.webp';
import image3 from '../assest/banner/image3.webp';
import image4 from '../assest/banner/image4.jpg';
import image5 from '../assest/banner/image5.jpg';
import image6 from '../assest/banner/image6.jpg';



const BannerProduct = () => {
    const [currentImage ,setCurrentImage] =useState(0);
    const desktopImages =[
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]
    const nextImage = ()=>{
        if(currentImage<desktopImages.length-1){
            setCurrentImage(prev=> prev+1);
        }

    }
    const prevImage = ()=>{
        if(currentImage != 0){
            setCurrentImage(prev=> prev-1);
        }
    }
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length-1 > currentImage){
                nextImage();
            }
            else{
                setCurrentImage(0);
            }
        },5000)
        return ()=>{
            clearInterval(interval);
        }
    },[currentImage]);

  return (

    <div className='container mx-auto px-4 rounded '>
         <div className=' h-60 md:h-96 w-full bg-slate-200 relative'>
            <div className='absolute z-10  h-full w-full flex items-center'>
                <div className=' flex justify-between  w-full text-3xl '>
                    <button onClick={prevImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft /></button>
                    <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight /></button>
                </div>
            </div>
           {/*Desktop And Tablet Version */}
            <div className='flex h-full w-full overflow-hidden' >
                {
                    desktopImages.map((imageURl,index)=>{
                        return(
                            <div  className='w-full h-full min-w-full min-h-full  transition-all'key={imageURl} style={{transform:`translate(-${currentImage*100}%)`}} >
                                <img src={imageURl} className='w-full h-full' />
                            </div>
                        )
                    })
                }
            </div>
         </div>
    </div>
   
  )
}

export default BannerProduct