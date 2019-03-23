import React from 'react'
import Me from '../Image/IMG_1231.jpg'
import { Button, Modal, Image } from 'semantic-ui-react'

const About = () => (
  <Modal
    trigger={
    <Button basic inverted className='mainButtonActual'>
    About
    </Button>
    }>
    <Image centered size='medium' src={Me} />
  </Modal>
)

export default About