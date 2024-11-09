import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate } from 'react-router-dom';
import CLoader from '../../components/CLoader';
import { Getdata} from '../../config/firebase';
import LeftSideBar from '../../components/left-sidebar';
import Mainposts from '../../components/mainposts';
import RightSidebar from '../../components/right-sidebar';
import ChatSlide from '../../components/ChatSlide';

function Index() {
  const [products, setProducts] = useState<any>([]);

  const getfirebasedata = async() =>{
   const product = await Getdata()
    setProducts(product)
  }
  useEffect(() => {
    getfirebasedata()
  },[])
  
 return (
    <div>
     <div className=' grid grid-cols-[60%_Auto] w-[95%] mx-auto'>
     <div className='grid grid-cols-[27%_Auto]'>
      <div><LeftSideBar/></div>
      <div>
      <Mainposts/>
      </div>
      </div>
      <div className='grid grid-cols-[55%_Auto] justify-between space-x-5 mx-5'>
        <div><RightSidebar/></div>
        <div> <ChatSlide/></div>
      </div>
    </div>
      </div>
  )
}

export default Index