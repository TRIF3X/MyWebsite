import React from 'react'
import Backpaca from '../Image/backpaca_home.PNG'
import WeatherAPI from '../Image/weatherAPI.PNG'
import { Button, Modal, Image, ModalContent } from 'semantic-ui-react'

const Projects = () => (
  <Modal
  style={{height: '100%'}}
  className='scrolling'
  trigger={
    <Button basic inverted className='mainButtonActual'>
    Projects
    </Button>
  } 
  closeIcon>
  {/* Backpaca */}
  <ModalContent scrolling={true}>
  <Modal.Header className='ui large header'>Backpaca</Modal.Header>
  <Modal.Content image >
    <Image wrapped size='big' src={Backpaca} onClick={() => window.open("https://backpaca.app/", "_blank")} />
    <Modal.Description>
      <p>Backpaca is an web application that allows users to brag about their travel experiences and plan future adventures with their friends.</p>
        <h5>
          Front-End: React and Apollo<br/>
          Back-End: GraphQL Yoga and Prisma 
        </h5>
    </Modal.Description>
  </Modal.Content>
  {/* WeatherAPI */}
  <Modal.Header className='ui large header'>WeatherAPI</Modal.Header>
  <Modal.Content image>
    <Image wrapped size='medium' src={WeatherAPI} onClick={() => window.open("https://gallant-albattani-4f5744.netlify.com/", "_blank")} />
    <Modal.Description>
      <p>WeatherAPI is a web application that allows a user to enter their zip code and receive their local current weather along with a few other details. Built using React on the front end with Semanic-UI for styling and Axios to interact with the API.</p>
        <h5>
          Front-End: React, Axios, Semantic-ui<br/>
        </h5>
    </Modal.Description>
  </Modal.Content>
  </ModalContent>
</Modal>
)

export default Projects
