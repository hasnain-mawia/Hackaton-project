import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RiMessage2Line } from "react-icons/ri";


function ChatSlide() {
  return (
    <div className='p-2 ng-white fixed right-0 shadow-md rounded-md'>
        <div className='rounded-md flex items-center px-3 bg-[#ebebeb]'>
        <IoSearchOutline className='text-[gray]'/>
        <input type="text" className='outline-none p-2 w-full bg-transparent'/>
        </div>
        <div className='my-4 flex space-x-2'>
            <div className='relative'>
                <img className='w-[50px] border-[2px] rounded-full border-pink-500' src={require('../images/profile-1.png')} alt="" />
               <div className='w-full'> <button className='bg-white shadow-xl rounded-full text-[20px] text-pink-500 absolute bottom-0 right-50 w-[20px] h-[20px] flex items-center justify-center'>+</button></div>
            </div>
            <div>
                <img className='w-[50px] border-[2px] rounded-full border-pink-500' src={require('../images/profile-2.png')} alt="" />
            </div>
            <div>
                <img className='w-[50px] border-[2px] rounded-full border-pink-500' src={require('../images/profile-3.png')} alt="" />
            </div>
            <div>
                <img className='w-[50px] border-[2px] rounded-full border-pink-500' src={require('../images/profile-4.png')} alt="" />
            </div>
        </div>
        <div>
            <h2>Recent Chats</h2>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-2.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-3.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-4.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
            <div className='flex items-center justify-between gap-2 hover:text-pink-400 p-2 cursor-pointer'>
            <div className='flex items-center gap-2'>
            <img className='w-[50px]' src={require('../images/profile-2.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>Amy Ruth</h3>
                <p className='text-[12px]'>New York, USA</p>
            </div>
            </div>
            <RiMessage2Line className='text-[gray] text-[25px]'/>
        </div>
            {/* ------------ Chats------------- */}
        </div>
    </div>
  )
}

export default ChatSlide