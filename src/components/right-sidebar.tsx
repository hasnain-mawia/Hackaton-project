import React from 'react'
import { FcLowPriority } from "react-icons/fc";


function RightSidebar() {
  return (
    <div>
        <div className='space-y-3 bg-white p-3 shadow-md rounded-md text-[gray] my-3'>
        <div className='flex justify-between items-center border-b-[2px] border-[#eeeeee] pb-2'>
            <h2 className='flex'>You might like</h2>
            <a className='text-blue-600 font-medium' href="#">See all</a>
        </div>
        <div>
        <div className='flex gap-2 items-center'>
        <img className='w-[50px]' src={require('../images/profile-3.png')} alt="" />
            <div>
                <h3 className='text-[13px] font-medium'>George Thompson</h3>
                <p className='text-[12px]'>15 Mutal Friends</p>
            </div>
        </div>
        </div>
            <div className='flex justify-between'>
                <button className='p-2 bg-pink-500 text-white px-8 rounded-lg'>Follow</button>
                <button className='p-2 border-[2px] border-gray px-8 rounded-lg'>Ignore</button>
            </div>
        </div>
        {/* ---------------------- Up Comming Events--------------------------- */}
        <div className='space-y-3 bg-white p-3 shadow-md rounded-md text-[gray] my-3'>
        <div className='flex justify-between items-center border-b-[2px] border-[#eeeeee] pb-2'>
            <h2 className='flex'>Up Comming Events</h2>
            <a className='text-blue-600 font-medium' href="#">See all</a>
        </div>
        <div>
            {/* ------- Section 1 ------- */}
        <div className=' bg-[#e9e9e9] p-3 rounded-lg'>
        <div className='flex gap-2 items-center'>
        <FcLowPriority className='text-[50px]'/>
            <div>
                <h3 className='text-[13px] font-medium'>Design Talks</h3>
                <p className='text-[12px]'>12 Oct, 13:00 IST</p>
            </div>
            </div>
                <p className='text-[12px] border-b-[2px] border-[#a0a0a0] py-2'>A General Talks About Design and Sr Designer of logitech Michael Spunfik.</p>
        <span className='flex justify-end font-medium text-[12px] pt-2'>112 Joined</span>
        </div>
            {/* ------- Section 1 ------- */}
            {/* ------- Section 2 ------- */}
        <div className=' bg-[#e9e9e9] p-3 rounded-lg mt-3'>
        <div className='flex gap-2 items-center'>
        <FcLowPriority className='text-[50px]'/>
            <div>
                <h3 className='text-[13px] font-medium'>Design Talks</h3>
                <p className='text-[12px]'>12 Oct, 13:00 IST</p>
            </div>
            </div>
                <p className='text-[12px] border-b-[2px] border-[#a0a0a0] py-2'>A General Talks About Design and Sr Designer of logitech Michael Spunfik.</p>
        <span className='flex justify-end font-medium text-[12px] pt-2'>112 Joined</span>
        </div>
            {/* ------- Section 2 ------- */}

        </div>
        </div>

        <div className='space-y-3 bg-white p-3 shadow-md rounded-md text-[gray] my-3'>
        <div className='flex justify-between items-center border-b-[2px] border-[#eeeeee] pb-2'>
            <h2 className='flex'>Suggested Groups</h2>
            <a className='text-blue-600 font-medium' href="#">See all</a>
        </div>
        <img className='rounded-lg' src={require('../images/banner.jpeg')} alt="" />
        <div className='flex items-center'>
            <img className='rounded-lg w-[40px]' src={require('../images/profile-1.png')} alt="" />
            <p>Designer UI UX</p>
        </div>
        </div>



    </div>
  )
}

export default RightSidebar