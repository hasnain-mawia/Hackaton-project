import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'

function ChatSlide() {
  return (
    <div className='p-2 ng-white absolute right-0'>
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
    </div>
  )
}

export default ChatSlide