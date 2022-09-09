import * as React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Modal, Divider } from '@mui/material'
import IBMCover from '../../Assets/IBM_GBS.png'
import Prototype from '../../Assets/IBM_Prototype.png'
import Brainstorming from '../../Assets/IBM_Brainstorming.png'
import Coding from '../../Assets/IBM_Coding.jpg'
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
    display: 'flex',
    overflowY: 'scroll',
    flexDirection: 'column',
}

const opts = {
    height: '300',
    width: '500',
}

export default function MediaCard() {
    const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
            <CardMedia component="img" height="200" image={IBMCover} alt="HIS Cover" />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: '20px', fontFamily: 'Raleway', fontWeight: 'bold', color: '#219653' }}
                >
                    IBM Talent Show POC Project
                </Typography>
                <Typography
                    variant="body2"
                    style={{ fontSize: '15px', fontFamily: 'Raleway', fontWeight: 'bold', color: '#333333' }}
                >
                    <strong className="project-card-tag-yellow">Vue.js</strong> &nbsp;
                    <strong className="project-card-tag-green">UI/UX Design</strong> &nbsp;
                    <strong className="project-card-tag-yellow">POC Design</strong>
                </Typography>
                <Typography
                    variant="h3"
                    color="text.secondary"
                    style={{ fontSize: '15px', fontFamily: 'Raleway', color: '#333333' }}
                >
                    <strong>Responsible For:</strong> Developing Website (Vue.js) and Design Proof of Concept, UI/UX
                </Typography>
            </CardContent>
            <CardActions>
                <div>
                    <Button onClick={handleOpen} style={{ color: '#F5B42B' }}>
                        MORE
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        {/* Box Starts Here */}

                        <Box sx={box_style}>
                            {/* Content */}

                            <Typography variant="h6">
                                <strong>Intro - Innovative Credit Card Platform</strong>
                            </Typography>
                            <Divider />
                            <Typography variant="body1">
                                This is an event for all new IBMers to practice becoming a qualified{' '}
                                <strong>Application Consultant</strong>. My teammates and I designed a credit card for
                                First Bank that can provide the First Bank's users to get a proper cash back plan. And
                                we designed a dashboard that can use big data to analyze every user's information so
                                that we could tag every user and provide them with a better credit card plan. Moreover,
                                I was responsible for creating the UI of the dashboard and developing it by using{' '}
                                <strong>Vue.js</strong>.
                            </Typography>
                            <CCallout color="warning">
                                <small>
                                    <strong>🎨 Prototyping</strong>
                                </small>
                            </CCallout>
                            <img src={Prototype} style={{ maxHeight: '400px', position: 'relative' }} />
                            <CCallout color="success">
                                <small>
                                    <strong>🧠 Brainstorming</strong>
                                </small>
                            </CCallout>
                            <img src={Brainstorming} style={{ maxHeight: '400px', position: 'relative' }} />
                            <CCallout color="warning">
                                <small>
                                    <strong>💻 Coding (Vue.js)</strong>
                                </small>
                            </CCallout>
                            <img src={Coding} style={{ maxHeight: '400px', position: 'relative' }} />

                            <br />
                        </Box>
                    </Modal>
                </div>
            </CardActions>
        </Card>
    )
}
