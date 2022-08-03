import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, 
  ListItemText, Box, Modal, Divider} from '@mui/material';
import FRArch from '../../Assets/FR_Arch.png';
import RollCall from '../../Assets/roll_call.png';
import SchoolManagement from '../../Assets/school_management.png';
import StudentWebsite from '../../Assets/student_website.png';
import TeacherWebsite from '../../Assets/teacher_website.png';
import { CCallout } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import YouTube from 'react-youtube';

const box_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height: 600,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    overflowY: "scroll",
    flexDirection: "column",
};

const opts = {
  height: '300',
  width: '500',
};


export default function MediaCard() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image={FRArch}
        alt="Facial Recognition Website Architecture"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" 
        style={{fontSize:"20px", fontFamily:"Raleway", fontWeight:"bold", color:"#219653"}}>
        Facial Recognition Website
        </Typography>
        <Typography variant="body2"
        style={{fontSize:"15px", fontFamily:"Raleway", fontWeight:"bold", color:"#333333"}}>
          <strong className="project-card-tag-yellow">Java</strong> &nbsp;
          <strong className="project-card-tag-green">React.js</strong>
        </Typography>
        <Typography variant="body2"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
           <p className="project-card-tag-grey">DB - Airtable (NoSQL)</p>
        </Typography>
        <Typography variant="h3" color="text.secondary"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
          <strong>Responsible For:</strong> React.js Development + Jave Spring Boot Setup
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

        {/* Box Starts Here */}

        <Box sx={box_style}>
        <CCallout color="warning">
          <small>Collaborate with Prof. Ji-Tsung Wu and e-Group corporation.</small>
        </CCallout>  
        <CCallout color="success">
          <small>🏆 Won the International ICT Innovative Service Award </small>
        </CCallout>
        <Typography variant='h6' >
          <strong>Introduction video of the Facial Recognition Website</strong>
        </Typography>
        <Divider/>
          <br/>
        <YouTube videoId="zh0y6tTTeNE"  opts={opts}/>

        {/* School Management */}

        <Typography variant='h6'>
          <strong>Intro - Facial Recognition + Management Website</strong>
        </Typography>
        <Divider/>
        <Typography variant='subtitle1'>
          <strong>Used Facial Recognition Engine to do "Roll Calling"</strong>
        </Typography>
        <Typography variant='body1'>
          Instead of telling the TA student ID to record student's attendance, students can easily use this facial recognition system to do the roll calling before they enter the classroom. 
        </Typography>
        <img src={RollCall} style={{ maxHeight: "400px", position: "relative"}}/>
        <Typography variant='subtitle1'>
          <strong>School Management Website</strong>
        </Typography>
        <Typography variant='body1'>
          School managers can manage the school by visiting this website. They can observe the students' attendance rate, average scores and so on.
        </Typography>
        <img src={SchoolManagement} style={{ maxHeight: "700px", position: "relative"}}/>
        <br/>
        {/* Student Website */}

        <Typography variant='h6'>
          <strong>Intro - Student & Teacher Website</strong>
        </Typography>
        <Divider/>
        <Typography variant='subtitle1'>
          <strong>Student's Website</strong>
        </Typography>
        <Typography variant='body1'>
          I was responsible for using Figma to design the UI and using React.js to build the front-end.
        </Typography>
        <img src={StudentWebsite} style={{ maxHeight: "500px", position: "relative"}}/>
        <Typography variant='subtitle1'>
          <strong>Teacher's Website</strong>
        </Typography>
        <Typography variant='body1'>
          School managers can manage the school by visiting this website. They can observe the students' attendance rate, average scores and so on.
        </Typography>
        <img src={TeacherWebsite} style={{ maxHeight: "400px", position: "relative"}}/>
        </Box>
        </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
