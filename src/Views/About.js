import React from 'react'
import Me from '../Image/IMG_1231.jpg'
import { Button, Modal, Image } from 'semantic-ui-react'

const About = () => (
  <Modal
    className="scrolling"
    trigger={
    <Button basic inverted className='mainButtonActual'>
    About
    </Button>
    } closeIcon>
    <Modal.Header textalign='center'>About Me</Modal.Header>
    <Modal.Content image>
      <Image wrapped src={Me} className='aboutMeImage'/>
      <Modal.Description>
        Hello! I'm Conner, a software developer from Austin, TX. I spent the first half of my professional life as a technician for Mercedes-Benz after being accepted into an invite only program to master the technolgies used in their vehicles. After 3 years with Mercedes-Benz of Austin I decided I wanted to make a change to a career less rough on the body with more potentional for growth. I stumbled across codecademy from my interest with cryptocurrency. Shortly after I realized how much I had enjoyed the challenge of writing clean and efficient code. I've spent the last 7 months learning front end web development and computer science with Lambda School. Outside of learning new technologies and writing code, I enjoy adventuring outdoors or just relaxing on the couch playing games or watching netflix.
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default About