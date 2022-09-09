import * as React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Modal, Divider } from '@mui/material'
import Prototype from '../../Assets/Smore_Prototype.png'
import Coding from '../../Assets/Smore_Coding.png'
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
            <CardMedia component="img" height="200" image={Prototype} alt="HIS Cover" />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    style={{ fontSize: '20px', fontFamily: 'Raleway', fontWeight: 'bold', color: '#219653' }}
                >
                    (On-going Project) S’more iOS Application
                </Typography>
                <Typography
                    variant="body2"
                    style={{ fontSize: '15px', fontFamily: 'Raleway', fontWeight: 'bold', color: '#333333' }}
                >
                    <strong className="project-card-tag-yellow">Swift</strong> &nbsp;
                </Typography>
                <Typography
                    variant="h3"
                    color="text.secondary"
                    style={{ fontSize: '15px', fontFamily: 'Raleway', color: '#333333' }}
                >
                    <strong>Responsible For:</strong> Swift Coding, UI/UX designing
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
                                <strong>Intro - Smore iOS application</strong>
                            </Typography>
                            <Divider />
                            <Typography variant="body1">
                                This is an application for lovers. They can check their anniversaries, each other's
                                health conditions and so on.
                            </Typography>
                            <CCallout color="warning">
                                <small>
                                    <strong>🎨 Prototyping</strong>
                                </small>
                            </CCallout>
                            <img src={Prototype} style={{ maxHeight: '400px', position: 'relative' }} />
                            <CCallout color="success">
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
