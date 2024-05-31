import React from 'react'
import { useState } from 'react';
import loginIcons from '../assest/user-yellow-circle-20550.svg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import imageTobase from '../helpers/imageTobase';
import summaryApi from '../common/index';
import {toast} from 'react-toastify';

const SignUp = () => {
    const [showPassword,setShowPassword] =useState(false);
    const [showConfirmPassword,setShowConfirmPassword] = useState(false);

    const [data ,setData]=useState({
        email:'',
        password:'',
        name:'',
        confirmPassword:'',
        profilePic : '',
       
    })

    const navigate = useNavigate();

    const handleOnChange = (e) => {

        const {name,value}=e.target;
        setData((prev)=>{
            return{
               ...prev,
                [name]:value
            }
        })
    }

    const handleUploadPic = async(e) => {

        const file = e.target.files[0];
        const imagePic = await imageTobase(file);

        // console.log('file', file);
        // console.log('imagePic', imagePic); 
        setData((prev)=>{
            return{
               ...prev,
                profilePic:imagePic,
            } 
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("data login", data);

        if(data.password === data.confirmPassword){

            console.log("SummaryApi.signUp.url",summaryApi.signUp.url )

            const dataResponse = await fetch(summaryApi.signUp.url,{
                method: summaryApi.signUp.method,
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            const dataApi = await dataResponse.json()

            if(dataApi.success){
                toast.success(dataApi.message);
                navigate('/login');
            }

            if(dataApi.error){
                toast.error(dataApi.message);
            }
            console.log("data",dataApi)
        }else{
            toast.error("please check password and confirm password ");  
        }
    }
    // console.log("data login", data);
  return (
    <section id='signup'>
    <div className='mx-auto container p-4'>
       
       <div className='bg-white p-5  w-full max-w-sm mx-auto'>

        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
            <div>
            <img src={data.profilePic || loginIcons} alt='login icons'/>
            </div>
            <form >
                <label>
                <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer  text-center absolute bottom-0 w-full'>
                Upload photo
                </div>
                < input type="file" className='hidden' onChange={handleUploadPic}/>
                </label>
            </form>
        </div>

        <form className='pt-6' onSubmit={handleSubmit}>
        <div className='grid'>
                <label >Name</label>
                <div  className='bg-slate-100 p-3'>
                <input type='text'
                 placeholder='Enter your name' 
                 name='name'
                 value={data.name}
                 onChange={handleOnChange}
                 required
                 className='w-full h-full outline-none bg-transparent'/>
                </div>
            </div>
            <div className='grid'>
                <label >Email</label>
                <div  className='bg-slate-100 p-3'>
                <input type='email'
                 placeholder='Enter your email' 
                 name='email'
                 value={data.email}
                 onChange={handleOnChange}
                 required
                 className='w-full h-full outline-none bg-transparent'/>
                </div>
            </div>
            <br></br>
            <div>
                <label>Password</label>
                <div className='bg-slate-100 p-3 flex'>
            <input 
                type={showPassword ?"text":"password"}  
                placeholder='Enter your password'
                name='password'
                value={data.password}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'/>
                <div className='cursor-pointer text-xl ' onClick={()=>setShowPassword((prev)=> ! prev)}>
                    <span>
                        {
                            showPassword ?
                            (<FaEyeSlash />)
                            :
                            (<FaEye />)
                        }
                   
                    </span>
                </div>
                </div>
                
            </div>
            <br></br>
            <div>
                <label>Confirm Password</label>
                <div className='bg-slate-100 p-3 flex'>
            <input 
                type={showConfirmPassword ? "text":"password"}  
                placeholder='Enter confirm password'
                name='confirmPassword'
                value={data.confirmPassword}
                onChange={handleOnChange}
                required
                className='w-full h-full outline-none bg-transparent'/>
                <div className='cursor-pointer text-xl ' onClick={()=>setShowConfirmPassword((prev)=> ! prev)}>
                    <span>
                        {
                           showConfirmPassword ?
                            (<FaEyeSlash />)
                            :
                            (<FaEye />)
                        }
                   
                    </span>
                </div>
                </div>
             
            </div>
            <button  className='bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign up</button>
        </form>

        <p className='my-5'>already have account ? <Link to={'/login'} className=' text-yellow-600 hover:text-yellow-700 hover:underline'>Login</Link></p>

       </div>

    </div>

   </section>
  )
}

export default SignUp