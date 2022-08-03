import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography
  , Box, Modal, Divider} from '@mui/material';
import HospitalCover from '../../Assets/hospital_cover.jpeg';
import HospitalEx1 from '../../Assets/hospital_ex1.png';
import HospitalEx2 from '../../Assets/hospital_ex2.png';
import { CCallout } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'

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
        image={HospitalCover}
        alt="HIS Cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" 
        style={{fontSize:"20px", fontFamily:"Raleway", fontWeight:"bold", color:"#219653"}}>
          Microsoft HIS System Migration Project
        </Typography>
        <Typography variant="body2"
        style={{fontSize:"15px", fontFamily:"Raleway", fontWeight:"bold", color:"#333333"}}>
          <strong className="project-card-tag-yellow">C#</strong> &nbsp;
          <strong className="project-card-tag-green">Knockout.js</strong>
        </Typography>
        <Typography variant="body2"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
           <p className="project-card-tag-grey">DB - MSSQL</p>
        </Typography>
        <Typography variant="h3" color="text.secondary"
        style={{fontSize:"15px", fontFamily:"Raleway", color:"#333333"}}>
         <strong>Responsible For:</strong> Printing System (C#, Knockout.js) in Hospital Information System.
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
          <small>This project is Microsoft’s <strong>largest</strong> project in Asia Pacific Region in 2017</small>
        </CCallout>  

        {/* Content */}

        <Typography variant='h6'>
          <strong>Intro - Hospital Information System</strong>
        </Typography>
        <Divider/>
        <Typography variant='subtitle1'>
          <strong>Mostly responsible for hospital pharmacy system and outpatient system development. </strong>
        </Typography>
        <Typography variant='body1'>
          - Developed the printings sheets and printing functions in the HIS system.
          <br/>- Using SQL Server Reporting Services (SSRS) and get the datasets from MS SQL Server.
        </Typography>
        <br/>
        <Typography variant='subtitle1'>
          <strong>Examples</strong>
        </Typography>
        <img src={HospitalEx1} style={{ maxHeight: "400px", position: "relative"}}/>
        <img src={HospitalEx2} style={{ maxHeight: "600px", maxWidth:"400px", position: "relative"}}/>
        <br/>
        
        </Box>
        </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
