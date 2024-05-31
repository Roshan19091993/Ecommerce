import React, { useContext } from 'react';
import { useState } from 'react';
import Logo from './Logo';
import { GrSearch } from 'react-icons/gr';
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from'react-router-dom';
import { useSelector } from 'react-redux';
import summaryApi from '../common';
import { toast } from'react-toastify';
import { useDispatch } from'react-redux';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';
import Context from '../context';


const Header = () => {

  const user = useSelector(state => state?.user?.user);
  const dispatch = useDispatch();
  const [menuDisplay, setMenuDisplay] = useState(false);
  const context = useContext(Context);
  const navigate = useNavigate();

  const searchInput = useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search);
  const searchQuery = URLSearch.getAll("q");
  const [search,setSearch] = useState(searchQuery);


  // console.log("user header", user);

  const handleLogout = async() => {

    const fetchData = await fetch(summaryApi.logout_user.url,{
      method: summaryApi.logout_user.method,
      credentials: 'include',
    })
    const data = await fetchData.json();

    if(data.success){
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if(data.error){
      toast.error(data.message);
    }
  }
  // console.log("header add to cart count ",context);

  const handleSearch = (e) =>{
    const {value} = e.target;
    setSearch(value);

    if(value){
      navigate(`/search?q=${value}`);
    }else{
      navigate("/search");
    }

  }
  return (
    <header className="h-16 shadow-md bg-white fixed w-full z-40">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className=''>
         <Link to={"/"}>
         <Logo w={90} h={50} />
         </Link>
        </div>
        <div className="flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none"
            onChange={handleSearch}
            value={search}
          />
          <div className="text-lg min-w-[50px] h-8 bg-yellow-600 flex items-center justify-center rounded-r-half">
            <GrSearch />
          </div>
        </div >

        <div className='flex items-center gap-7'>

        <div className='relative   flex justify-center'>
          {
            user?._id &&(
              <div className='text-3xl cursor-pointer relative flex justify-center ' onClick={()=>setMenuDisplay(prev=>!prev)}>
              {
                user?.profilePic ?(
                  <img src={user?.profilePic} alt={user?.name} className='rounded-full w-10 h-10' />
                ):(
                  <FaRegCircleUser />
                )
              }
  
            </div>
            )
          }

          {
            menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
              <nav>
                {
                  user?.role === ROLE.ADMIN && (
                    <Link to={"/admin-pannel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(prev=>!prev)}>Admin Pannel</Link>
                  )
                }
                
              </nav>
          </div>
            )
          }
          
        </div>
          {
            user?._id &&(
              <Link  to={"/cart"} className='text-4xl relative' >
                  <span><FaShoppingCart /></span>
                  
        
                  <div className='bg-yellow-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                  <p className='text-sm'>{context?.cartProductCount}</p>
                  </div>
             </Link>
            )

          }

        <div>
          {
            user?._id ?(
              <button onClick={handleLogout} className='px-5 py-2 rounded-full bg-yellow-600 hover:bg-yellow-800 text-black'>Logout</button>
            )
            :
            (
              <Link to={"/login"} className='px-5 py-2 rounded-full bg-yellow-600 hover:bg-yellow-800 text-black'>Login</Link>
            )
          }
          
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
