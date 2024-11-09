import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineWindows } from "react-icons/ai";
import { CiShop } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { TbBadge } from "react-icons/tb";
import { BiSolidMessageAlt } from "react-icons/bi";
import { IoIosSettings } from "react-icons/io";


function LeftSideBar() {
  return (
    <>
    <div  className='bg-white shadow-sm text-[gray] space-y-2 p-2 rounded-md my-2'>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <IoHomeOutline/>
            <p className='text-[14px]'>Feed</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <AiOutlineWindows/>
            <p className='text-[14px]'>Explore</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <CiShop/>
            <p className='text-[14px]'>Marketplace</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <FaUsers />
            <p className='text-[14px]'>Groups</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <TbBadge/>
            <p className='text-[14px]'>My favorites</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <BiSolidMessageAlt/>
            <p className='text-[14px]'>Messages</p>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <IoIosSettings />
            <p className='text-[14px]'>Settings</p>
        </div>
    </div>

    <div  className='bg-white shadow-sm text-[gray] space-y-2 p-2 rounded-md my-2'>
        <h2 className='text-[18px] font-medium'>My Contacts</h2>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
            <div>
                <h3 className='text-[14px] font-medium'>Julia Clarka</h3>
                <p className='text-[12px]'>New York, USA</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-2.png')} alt="" />
             <div>
                <h3 className='text-[14px] font-medium'>Mark Stefine</h3>
                <p className='text-[12px]'>Sydney, Austallia</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-3.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Sara Cliene</h3>
                <p className='text-[12px]'>Tokyo Japan</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-4.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Trinity Sipson</h3>
                <p className='text-[12px]'>Chicago, USA</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-2.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
                </div>
        </div>
        <div className='flex items-center gap-5 hover:text-pink-400 p-2 cursor-pointer'>
            <img className='w-[50px]' src={require('../images/profile-3.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>George Thompson</h3>
                <p className='text-[12px]'>New York, USA</p>
                </div>
        </div>
        </div>
    </>
  )
}

export default LeftSideBar