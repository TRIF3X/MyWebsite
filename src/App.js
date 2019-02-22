import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react'
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='mainDiv'>
          <div>
            Conner Hoessly
          </div>
          <div>______</div>
          <div>
            <Button basic inverted>
            Projects
            </Button>
            <Button basic inverted>
            About
            </Button>
            <Button basic inverted>
            Resume
            </Button>
          </div>
          <div>
            <Icon circular className='black github' size='tiny'/>
            <Icon circular className='black linkedin' size='tiny'/>
            <Icon circular className='black mail' size='tiny'/>
          </div>
        </div>
    );
  }
}

export default App;
