import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props){
        super(props)
        this.state = this.state
    }
    render() {
        return (
            <div className='headerDiv'>
                <div className='headerLinks'>
                    <a href='#' className='links'>About me</a>
                    <a href='#' className='links'>Projects</a>
                    <a href='#' className='links'>Contact me</a>
                </div>
            </div>
        )
    }
}

export default Header