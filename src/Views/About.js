import React from 'react'
import Me from '../Image/IMG_1231.jpg'
import { Button, Modal, Image } from 'semantic-ui-react'

const About = () => (
  <Modal
    className="aboutMeModal"
    trigger={
    <Button basic inverted className='mainButtonActual'>
    About
    </Button>
    }>
    <Modal.Content image>
      <Image wrapped size='medium' src={Me} className='aboutMeImage'/>
      <Modal.Description>
        This is my about me
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default About