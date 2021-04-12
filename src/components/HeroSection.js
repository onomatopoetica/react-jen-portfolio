import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>JENNIFER BATES</h1>
      <p>Web Developer + Project Manager</p>
      <a href='#projects' className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          CONTACT ME
        </Button>
      </a>
      {/* <div>
        <a href='https://drive.google.com/file/d/1uLBy29D4QRW3srTHFjjzmfvzziwJwylQ/view?usp=sharing' className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            HIRE ME
        </Button>
        </a>
      </div> */}
    </div>
  )
}

export default HeroSection;
