import React from 'react'
import Backpaca from '../Image/backpaca_home.PNG'
import { Button, Modal, Image, Header } from 'semantic-ui-react'

const Projects = () => (
  <Modal trigger={
    <Button basic inverted className='mainButtonActual'>
    Projects
    </Button>
  }>
  <Modal.Header>Backpaca</Modal.Header>
  <Modal.Content image>
    <Image wrapped size='big' src={Backpaca} onClick={() => window.open("https://backpaca.app/", "_blank")} />
    <Modal.Description>
      <p>Backpaca is an web application that allows users to brag about their travel experiences and plan future adventures with their friends.</p>
        <h5>
          Front-End: React and Apollo<br/>
          Back-End: GraphQL Yoga and Prisma 
        </h5>
    </Modal.Description>
  </Modal.Content>
</Modal>
)

export default Projects
