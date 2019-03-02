import React, { Component } from 'react';
import Projects from './Views/Projects.js'
import { Button, Icon } from 'semantic-ui-react'
import './App.scss';

class App extends Component {


  emailMe() {
    window.location.href = `mailto:hoessly.conner@gmail.com`
  }

  linkedIn() {
    window.open("https://www.linkedin.com/in/conner-hoessly-0970b38a/", "_blank")
  }

  github() {
    window.open("https://github.com/TRIF3X", "_blank")
  }


  render() {
    return (
        <div className='mainDiv'>
          <div className='mainName'>
            Conner Hoessly
          </div>
          <div className='mainBreak'>______________</div>
          <div className='mainTitle'>Full Stack Web developer</div>
          <div className='mainButtons'>
            <Projects/>
            <Button basic inverted className='mainButtonActual'>
            About
            </Button>
            <Button basic inverted className='mainButtonActual'>
            Resume
            </Button>
          </div>
          <div>
            <Icon onClick={() => this.github()} circular name='github' color='black' size='large' className='mainIcon' />
            <Icon onClick={() => this.linkedIn()} circular name='linkedin' color='black' size='large' className='mainIcon'/>
            <Icon onClick={() => this.emailMe()} circular name='mail' color='black' size='large' className='mainIcon'/>
          </div>
        </div>
    );
  }
}

export default App;
