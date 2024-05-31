import React, { useEffect } from 'react';
import { useState } from 'react';
import summaryApi from '../common';
import { toast } from'react-toastify';
import moment from 'moment';
import { MdModeEdit } from "react-icons/md";
import ChangeUserRole from '../components/ChangeUserRole';


const AllUsers = () => {

    const [allUsers,setAllUsers] = useState([]);
    const [openUpdateRole,setOpenUpdateRole] = useState(false);
    const [updateUserDetails,setUpdateUserDetails] = useState({
      name:'',
      email:'',
      role:'',
      _id:'',
    });

    const fetchAllUsers = async() =>{
        const   fetchData = await fetch(summaryApi.allUser.url,{
            method:summaryApi.allUser.method,
            credentials: 'include',
        });

        const dataResponse = await  fetchData.json();

        if(dataResponse.success){
           setAllUsers(dataResponse.data);
        }

        if(dataResponse.error){
          toast.error(dataResponse.message)
        }
     
        console.log(dataResponse);
    }


    useEffect(() =>{
        fetchAllUsers();
    },[]);

  return (
    <div className=' bg-white pb-4 text-center border text-base font-medium'>
      <table className='w-full userTable '>
        <thead >
          <tr className='bg-black text-white'>
         
            <th className='border text-base' >Sr.No</th>
            <th className='border text-base'>Name</th>
            <th className='border text-base'>Email</th>
            <th className='border text-base'>Role</th>
            <th className='border text-base'>Created Date</th>
            <th className='border text-base'>Action</th>
            
          </tr>
        </thead>
        <tbody >
          {
            allUsers.map((el,index)=>{
              return (
              <tr >
                <td className='border text-base'>{index+1}</td>
                <td className='border text-base'>{el?.name}</td>
                <td className='border text-base'>{el?.email}</td>
                <td className='border text-base'>{el?.role}</td>
                <td className='border text-base'>{moment(el?.createdAt).format('ll')}</td>
                <td className='border text-base'>
                  <button className='bg-green-100 p-2 rounded-full cursor-pointer hover:bg-green-500 hover:text-white'
                   onClick={()=>{
                    setUpdateUserDetails(el)
                    setOpenUpdateRole(true)
                  }}
                   >
                  <MdModeEdit />
                  </button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
      {
        openUpdateRole &&(
        <ChangeUserRole 
          onClose={()=>setOpenUpdateRole(false)}
          name={updateUserDetails.name}
          email={updateUserDetails.email}
          role={updateUserDetails.role}
          userId={updateUserDetails._id}
          callFunc={fetchAllUsers}
        />
        )
      }
     
    </div>
  )
}

export default AllUsers

