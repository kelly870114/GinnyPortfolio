import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Modal} from '@mui/material';
import UCDlogo from '../../Assets/UCD_logo2.jpg';

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
        image={UCDlogo}
        alt="UCD Logo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" 
        style={{fontSize:"20px", fontFamily:"Raleway", fontWeight:"bold", color:"#219653"}}>
        University Of California, Davis
        </Typography>
        <Typography variant="body2"
        style={{fontSize:"15px", fontFamily:"Raleway", fontWeight:"bold", color:"#333333"}}>
          Master of Science in Computer Science
        </Typography>
        <Typography variant="h3" color="text.secondary"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
          2021.09 - 2022.03(Expected)
        </Typography>
      </CardContent>
      <CardActions>
        <div>
        <Button onClick={handleOpen} style={{color:"#F5B42B"}}>MORE</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={box_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"
          style={{fontFamily:"Raleway", fontWeight:"bold", color:"#333333"}}>
            Courses
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
          style={{fontFamily:"Raleway", color:"#333333"}}>
            <ul style={{textAlign: 'left'}}>
                <li>[ECS235A] Computer and Information Security</li>
                <li>[ECS260] Software Engineering</li>
                <li>[ECS201A] Computer Architecture</li>
                <li>[ECS271] Machine Learning</li>
                <li>[ECS252] Computer Network</li>
                <li>[ECS122A] Algorithm Design</li>
            </ul>
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2"
          style={{fontFamily:"Raleway", fontWeight:"bold", color:"#333333"}}>
            Projects
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}
          style={{fontFamily:"Raleway", color:"#333333"}}>
            <ul style={{textAlign: 'left'}}>
                <li>[ECS235A] Perform a source code analysis of an open-source project</li>
                <li>[ECS260] Is software development different in popular projects</li>
                <ul>
                    <li>Python: Selenium, Beautiful Soup and Pydriller</li>
                </ul>
                <li>[ECS271] Machine Learning</li>
                <ul>
                    <li>Python: ResNet50, VGG16 and VGG19</li>
                </ul>
            </ul>
          </Typography>
        </Box>
        </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
