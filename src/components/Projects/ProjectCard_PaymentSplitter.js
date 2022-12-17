import * as React from 'react'
import ReactPlayer from 'react-player/youtube'
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Modal, Divider } from '@mui/material'
import Prototype from '../../Assets/PS_Prototype.png'
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
    overflowX: 'hidden', 
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
                    Payment Splitter for Cryptocurrency
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
                                <strong>Intro - Payment Splitter</strong>
                            </Typography>
                            <Divider />
                            <div>
                                <a href="https://vancelot7789.github.io/paymentsplitter/" target="_blank"> Payment Splitter Website </a>
                            </div>
                            <Typography variant="body1">
                            Due to the widespread use of cryptocurrencies, many people are building NFTs or DeFi 
                            projects together, and they will need a safe and reliable way to split the crypto 
                            profits. Hence, for this project, we aim to develop a crypto asset splitter application 
                            for users to keep track of their shared crypto transactions. We are using Swift for our 
                            frontend, Node.js for our backend, and Solidity for smart contracts, along with other 
                            tools such as Truffle, Ganache-CLI, MongoDB.
                            </Typography>
                            <CCallout color="warning">
                                <small>
                                    <strong>🎨 Prototyping</strong>
                                </small>
                            </CCallout>
                            <img src={Prototype} style={{ maxHeight: '400px', position: 'relative' }} />
                            <CCallout color="success">
                                <small>
                                    <strong>💻 Coding</strong>
                                </small>
                            </CCallout>
                            <div>
                                <a href="https://github.com/kelly870114/Payment-Splitter" target="_blank"> Github Code </a>
                            </div>
                            <div className='player-wrapper'>
                                <ReactPlayer className='react-player' url='https://youtu.be/w5EDqk2KyUs' />
                                <br />
                            </div>
                        </Box>
                    </Modal>
                </div>
            </CardActions>
        </Card>
    )
}
