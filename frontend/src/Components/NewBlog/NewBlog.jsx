import { IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'
import './NewBlog.css'
;import TaskRoundedIcon from '@mui/icons-material/TaskRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import axios from 'axios'



function NewBlog() {
 const navigate=useNavigate()

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
    );

  const [data,setData]=useState([])  


    const updateTextDescription = (state) => {
    setEditorState(state);
    const data = convertToRaw(editorState.getCurrentContent());
    console.log(data.blocks);
    setData(data.blocks)
    
    };
 
const publishBlog=async()=>{
  console.log("start");
  try {
    const blog=await axios.post('/postblog',data)
    console.log("iii",blog);
    navigate('/')
  } catch (error) {
    console.log(error.response);
  }
 

}



  return (
    <>
    <Navbar/>

<div className='masterdiv'>
    <div className='childdiv'>
    <IconButton className=''  sx={{ float:"left" }}>
      <Link to='/'><HomeRoundedIcon className='iconhm' fontSize='large'   /></Link>
            
    </IconButton>
    </div>

<div className='childdiv'>
    
    <IconButton className=''  sx={{ float:"left" }}>
      <Link to='' 
      onClick={publishBlog} 
      ><TaskRoundedIcon className='iconaprv' fontSize='large'   /></Link>
            
    </IconButton>
    </div>
    </div>
   
    <div className='container'>
      <h1 className='blog'>New Blog</h1>
      <div className='editor'>

<Editor
editorState={editorState}
toolbarClassName="toolbar-class"
wrapperClassName="wrapper-class"
editorClassName="editor-class"
onEditorStateChange={updateTextDescription}


/>


    </div>
   
    </div>
    </>
    
  )
}

export default NewBlog
