import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './App.scss';

class App extends Component {


  emailUser() {
    
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
            <Button basic inverted className='mainButtonActual'>
            Projects
            </Button>
            <Button basic inverted className='mainButtonActual'>
            About
            </Button>
            <Button basic inverted className='mainButtonActual'>
            Resume
            </Button>
          </div>
          <div>
            <Icon circular name='black github' size='large' className='mainIcon'/>
            <Icon circular name='black linkedin' size='large' className='mainIcon'/>
            <Icon circular name='black mail' size='large' className='mainIcon'/>
          </div>
        </div>
    );
  }
}

export default App;
