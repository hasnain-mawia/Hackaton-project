import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { CiVideoOn } from "react-icons/ci";
import { MdOutlinePhotoSizeSelectActual, MdOutlineEmojiEmotions } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { LiaCommentSolid } from "react-icons/lia";
import { PiShareFat } from "react-icons/pi";
import Upload from './uploadPost';
import { Getdata } from '../config/firebase';
import { TbLocation } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";




function Mainposts() {
    const [modal,setModal] = useState<any>(false);
    // const [refresh,setRefresh] = useState<any>(false);
    const [Post, setPost] = useState<any>([]);
    
    const getfirebasedata = async() =>{
        const postData = await Getdata();
        setPost(postData)
    }
    
    useEffect(() => {
        getfirebasedata()
    },[Post])
    
    const PostModal = () => {
        setModal(!modal)
    }   

    return modal ? <Upload setModal={setModal}/> : (
        <div>
        <div className='bg-white shadow-md p-5 rounded-lg'>
            <div className='flex space-x-2'>
        <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
        <input type="text" className='outline-none px-2 text-[gray] bg-[#e7e7e7] w-full font-medium rounded-lg' placeholder='Whats Happening?'/>
        </div>
        <div className='flex justify-between space-x-5 text-[gray] pt-5'>
            <button className='flex gap-2 items-center font-medium'><CiVideoOn className='text-[22px]'/> Live Video</button>
            <button className='flex gap-2 items-center font-medium'><MdOutlinePhotoSizeSelectActual className='text-[22px]'/>Photos</button>
            <button className='flex gap-2 items-center font-medium'><MdOutlineEmojiEmotions className='text-[22px]'/>Feeling</button>
            <button onClick={PostModal} className='bg-[#EC4899] text-white px-10 py-2 rounded-md '>Post</button>
        </div>
        </div>

        {/* --------------- First Post [start]-------------------------- */}
        {Post.length == 0 ? <div className='flex justify-center items-center'><ImSpinner8 className='text-[#EC4899] text-[42px] animate-spin my-5'/> </div> : Post.map((postData:any, i:number) => {
        return(
        <div key={i} className='bg-white shadow-md p-5 rounded-lg text-[gray] mt-3'>
            <div className='flex gap-2 items-center'>
            <img className='w-[50px]' src={require('../images/profile-3.png')} alt="" />
                <div>
                    <h3 className='text-[13px] font-medium'>George Thompson</h3>
                    <p className='text-[12px]'>New York, USA</p>
                    </div>
            </div>
        <img className='rounded-xl mt-6 ' src={postData.image} alt={postData.title} />    
        <div className='flex justify-end items-center space-x-10 py-2'>
            <p className='flex items-center gap-1 font-medium'><span>13</span> Comments</p>
            <p className='flex items-center gap-1 font-medium'><span>340</span> Likes</p>
        </div>
        <div className='border-t-2 border-b-2 border-gray py-3 flex justify-between items-center'>
        <button className='flex gap-1 items-center font-medium'><CiHeart className='text-[24px]'/> Like</button>
        <button className='flex gap-1 items-center font-medium'><LiaCommentSolid  className='text-[24px]'/> Comments</button>
        <button className='flex gap-1 items-center font-medium'><PiShareFat className='text-[24px]'/> Share</button>
        </div>
        <div>
        <div className='flex space-x-4 mt-3'>
        <img className='w-[50px]' src={require('../images/profile-1.png')} alt="" />
        <div className='flex w-full space-x-1'>
        <input type="text" className='outline-none px-2 text-[gray] bg-[#e7e7e7] w-full font-medium rounded-lg' placeholder='Write a comment...'/>
        <button className='flex gap-1 items-center font-medium bg-[#f0bbc4] p-2 text-[#f03b59] rounded-lg '><TbLocation className='text-[24px] rotate-45'/> </button>
        </div>
        </div>
        </div>
        </div> )
                 })
            }
        {/* --------------- First Post [end]-------------------------- */}



    </div>
  )
}

export default Mainposts