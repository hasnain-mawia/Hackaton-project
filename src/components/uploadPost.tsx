import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { PostUpload } from '../config/firebase'
import { useNavigate } from 'react-router-dom';


function Upload({setModal, setRefresh}:any) {
    const navigate = useNavigate()
    const [errors , setErrors] = useState<any>({})
    const [values, setvalues] = useState<any>({
        title:"",
        image:"",
    })

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        const validationErrors:any = {};
        if(!values.title.trim()){
            validationErrors.title = "Title Must Required"
        }
        if(!values.image){
        validationErrors.image = "Please Upload Post image"
        }
       
         setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            PostUpload(values)
            setModal(false);
            try{
                toast.success(`${values.title} Post Published`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                        });
                        navigate('/dashboard')
                    }
                catch(err){
                    console.log(err)
                    toast.error(`${values.title} err`, {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: "dark",
                        });
                }  
            setvalues({
                title:"",
                image:"",
            })
        }
    }
    const dismissModal = () =>{
        setModal(false);
        navigate('/dashboard')
    }

  return (
    <>
     <div onClick={dismissModal} className='w-full bg-black opacity-75 fixed top-0 right-0 h-full z-20'></div> 
    <div className='max-w-[1300px] mx-auto my-5 bg-[#ededed] p-10 fixed top-[30px] right-[400px] left-[400px] rounded-xl z-50'>
      <h2 className='text-[27px] font-semibold mb-2 dark:text-[black]'>Post Upload</h2>
            <div className='mt-2 max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex flex-col m-3 sm:m-0 text-[16px] dark:text-[black]' action="">
            <label>Title</label>
            <input onChange={(e:any)=> setvalues({...values,title:e.target.value})} value={values.title} id='Title' className=
            {`${errors.title && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full`} type="text" />
            {errors.title && <span className='text-[14px] text-[red]'>{errors.title}</span>}
            <label >Upload post</label>
<div className="flex items-center justify-center w-full">
    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
            {values.image ? <img className='overflow-hidden' src={URL.createObjectURL(values.image)} alt="" /> :    
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div> }
        <input id="dropzone-file" type="file"  onChange={(e:any)=> setvalues({...values,image:e.target.files[0]})}
        className={`${errors.image && 'border-[1px] border-[red]' } bg-[#ffffff] p-2 rounded-md w-full hidden`}/>
                {errors.image && <span className='text-[14px] text-[red]'>{errors.image}</span>}
    </label>
</div> 
                <button className='bg-[#2F9EED] h-[40px] text-white rounded-lg mt-8' onClick={handleSubmit}>Publish</button>
        </form>
      </div>
        </div>
        </>
  )
}

export default Upload