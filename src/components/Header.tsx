import React, { useEffect, useState } from 'react'
import { db, doc, Logout } from '../config/firebase'
import { Link, useNavigate } from 'react-router-dom'
import {auth, onAuthStateChanged } from "../config/firebase";
import { LuLogOut } from 'react-icons/lu';
import { IoSearchOutline } from "react-icons/io5";
import { getAuth } from 'firebase/auth';



function Header() {
  const storageKey:any = localStorage.getItem('DarkMode')
    const navigate = useNavigate()
    const [user, setUser] = useState<any>();
    const logoutUser = () =>{
    Logout(navigate)
  }
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {  
        setUser(user);
      });
    }) 
    
    useEffect(()=>{
      const {pathname} = window.location;
      if (user) {
        if(pathname === '/'){
          navigate('/dashboard')
        }
      }else{
        if(pathname === '/upload'){
          navigate('/')
        }
      }

     },[window.location, user])

      return user ? (
    <div className='p-2 sticky top-0 bg-white shadow-sm'>
        <div className=' grid grid-cols-[50%_Auto] items-center justify-between w-[95%] mx-auto'>
        <div className='grid grid-cols-[33%_Auto]'>
          <h2 className='text-[22px] font-bold text-[#747474]'> <Link to={'/dashboard'}>Scrolllink </Link></h2>
        <div className='border-[2px] border-gray rounded-md flex items-center px-3'>
        <IoSearchOutline className='text-[gray]'/>
        <input type="text" className='outline-none px-2 text-[gray] w-full'/>
        </div>
        </div>
        <div className="flex items-center gap-2">
        <div className='flex justify-end items-center gap-2 bg-[#ffffff] dark:bg-[#2F9EED] pl-4 rounded-[30px]'>
        <p className='font-semibold'>{user?.email}</p>
        <button onClick={logoutUser} title='Logout' className='bg-[red] text-white rounded-[30px] p-3'><LuLogOut className='text-[22px]' /></button>
        </div>
        </div>
        </div>
    </div>
  ): null
}

export default Header