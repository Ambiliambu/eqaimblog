import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './BlogPost.css'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link, useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import axios from 'axios';
function BlogPost() {

  const blogId=useParams()
  console.log(blogId);


  const [value,setValue]=useState('')

  const fetchData=async()=>{
    try{
    const {data}=await axios.get(`/getblog/${blogId.Id}`)
    console.log("ll",data);
    setValue(data)
    }catch(error){
      console.log("ii",error.response);
    }

   }

   useEffect(()=>{
    fetchData()
  
 },[])




  
  return (
  <>
  <Navbar/>
  <IconButton className='iconbtnn'  sx={{ float:"left" }}>
      <Link to='/'><HomeRoundedIcon className='iconhome' fontSize='large'   /></Link>
            
    </IconButton>
    <div className='container'>
    <h1 className='blogpost'>Blog Post</h1>
    <div className='blogdiv'>
    <p className='title'>{value.title}</p>
    <img className='blogimg' src={value.img} alt='img'/>
   

    </div>
    <p>
      {value.content}
    </p>
   
    </div>
    </>
  )
}

export default BlogPost
