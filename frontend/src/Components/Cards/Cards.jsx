import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import axios from 'axios';

function Cards(props) {

  // console.log("ii",props.data);
  let {title,content,img}=props.data;

  return (
    <>

    <div >
      

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>

            <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
            
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          
        </CardContent>
      
      </CardActionArea>
    </Card>

 
    </div>
    </>
  )
}

export default Cards
