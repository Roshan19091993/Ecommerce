import React from 'react';
import { useState } from 'react';
import loginIcons from '../assest/user-yellow-circle-20550.svg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { useContext } from 'react';
import Context from '../context/index';


const Login = () => {

    const [showPassword,setShowPassword] =useState(false);
    const [data ,setData]=useState({

        email:'',
        password:''
    })

    const navigate = useNavigate();
    const {fetchUserDetails,  fetchUserAddToCart} = useContext(Context);

 



    const handleOnChange = (e) => {

        const {name,value}=e.target;
        setData((prev)=>{
            return{
               ...prev,
                [name]:value
            }
        })
    }
    const handleSubmit =  async(e) => {
        e.preventDefault();
        const dataResponse = await fetch(summaryApi.signIn.url,{
            method: summaryApi.signIn.method,
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })

        const dataApi =  await dataResponse.json();

        if(dataApi.success){
            toast.success(dataApi.message);
            navigate('/');
            fetchUserDetails();
            fetchUserAddToCart();
            
        }
        if(dataApi.error){
            toast.error(dataApi.message);
        }

    }
    console.log("data login", data);

  return (
   <section id='login'>
    <div className='mx-auto container p-4'>
       
       <div className='bg-white p-5  w-full max-w-md mx-auto'>

        <div className='w-20 h-20 mx-auto'>
            <img src={loginIcons} alt='login icons'/>
        </div>

        <form className='pt-6' onSubmit={handleSubmit}>
            <div className='grid'>
                <label htmlFor='email'>Email</label>
                <div  className='bg-slate-100 p-3'>
                <input type='email'
                 placeholder='Enter your email' 
                 name='email'
                 value={data.email}
                 onChange={handleOnChange}
                 className='w-full h-full outline-none bg-transparent'/>
                </div>
            </div>
            <br></br>
            <div>
                <label htmlFor='password'>Password</label>
                <div className='bg-slate-100 p-3 flex'>
            <input 
                type={showPassword ?"text":"password"}  
                placeholder='Enter your password'
                name='password'
                value={data.password}
                onChange={handleOnChange}
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
                <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-yellow-600'>
                    Forgot password ?
                </Link>
            </div>
            <button className='bg-yellow-600 hover:bg-yellow-700 text-black px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>
        </form>

        <p className='my-5'>Don't have account ? <Link to={'/sign-up'} className=' text-yellow-600 hover:text-yellow-700 hover:underline'>Sign up</Link></p>

       </div>

    </div>

   </section>
  )
}

export default Login