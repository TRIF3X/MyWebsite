import React from 'react'
import Iframe from 'react-iframe'
import { Button, Modal } from 'semantic-ui-react'

const Resume = () => (
  <Modal
    trigger={
    <Button basic inverted className='mainButtonActual'>
    Resume
    </Button>
    }>
    <Iframe 
    url = "https://resume.creddle.io/embed/bgshrnisard"
    width="100%"
    height="90vh"
    display="initial"
    allowFullScreen
    />

  </Modal>
)

export default Resume