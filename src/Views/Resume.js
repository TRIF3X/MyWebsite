import React from 'react'
import Iframe from 'react-iframe'
import { Button, Modal } from 'semantic-ui-react'

const Resume = (props) => (


  <Modal
    trigger={
    <Button basic inverted className='mainButtonActual'>
    Resume
    </Button>
    }>
    {props.width < 600  ? 
    <div className='mobileResume'>
      View my hosted resume <a href="https://resume.creddle.io/embed/bgshrnisard" target="_blank" rel="noopener noreferrer">here</a>
    </div>:
    <Iframe 
    url = "https://resume.creddle.io/embed/bgshrnisard"
    width="100%"
    height="90vh"
    />
  }
  </Modal>
)

export default Resume