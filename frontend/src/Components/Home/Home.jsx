import Cards from '../Cards/Cards'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import './Home.css'
import Navbar from '../Navbar/Navbar';
import { Button, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'

function Home() {

const navigate=useNavigate()

const [value,setValue]=React.useState([])

  const fetchDatas=async()=>{
    try{
    const {data}=await axios.get('/getblogs')
    // console.log("ll",data);
    setValue(data)
    }catch(error){
      console.log("ii",error.response);
    }

   }



  React.useEffect(()=>{
     fetchDatas()
   
  },[])
 
const handleView=(Id)=>{
  console.log(Id);
  navigate(`/blogpost/${Id}`)
}


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
  function FormRow() {
    return (
      <React.Fragment>
        {value.map((obj,index)=>
        
          <Grid item xs={4} key={index} onClick={()=>{handleView(obj._id)}} >
          <Cards data={obj} />
          </Grid>
        )}
       
        {/* <Grid item xs={4}>
          <Cards/>
        </Grid> */}
       
      </React.Fragment>
      

    );
  }




  return (



    <>
    <Navbar/>
    <div className='container'>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid container item spacing={4}>
         <FormRow />
        </Grid>
       
      </Grid>
    </Box>
    
    <IconButton className='iconbtn'  sx={{ float:"right" }}>
      <Link to='/newblog'><NoteAddRoundedIcon className='iconadd' fontSize='large'   /></Link>
            
    </IconButton>

    </div>
    </>
  )
}

export default Home
