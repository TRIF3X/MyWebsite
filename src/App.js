import React, { Component } from 'react';
import Projects from './Views/Projects.js'
import About from './Views/About.js'
import Resume from './Views/Resume.js'
import MobileProject from './Views/MobileProject.js'
import MobileAbout from './Views/MobileAbout.js'
import { Icon } from 'semantic-ui-react'
import './App.scss';

class App extends Component {
  state = {
    windowWidth: undefined
  }

  handleResize = () => this.setState({
    windowWidth: window.innerWidth
  })

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }


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
          {this.state.windowWidth < 600 ? 
          <div className='mainButtons'>
            <MobileProject/>
            <MobileAbout />
            <Resume width={this.state.windowWidth} /> 
          </div>
            :
          <div className='mainButtons'>
            <Projects/>
            <About />
            <Resume width={this.state.windowWidth} />
          </div>
          }
          <div>
            <Icon onClick={() => this.github()} name='github' color='black' size='big' className='mainIcon' />
            <Icon onClick={() => this.linkedIn()} name='linkedin' color='black' size='big' className='mainIcon'/>
            <Icon onClick={() => this.emailMe()} name='mail' color='black' size='big' className='mainIcon'/>
          </div>
        </div>
    );
  }
}

export default App;
