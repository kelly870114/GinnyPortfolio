import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent, CardMedia, Typography} from '@mui/material';
import Azure from '../../Assets/Azure_900.jpg';

const box_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MediaCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={Azure}
        alt="Azure Certificate"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" 
        style={{fontSize:"20px", fontFamily:"Raleway", fontWeight:"bold", color:"#219653"}}>
        AZ-900 Certificate
        </Typography>
        
        <Typography variant="h3" color="text.secondary"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
          2020.05
        </Typography>
      </CardContent>
      
    </Card>
  );
}
