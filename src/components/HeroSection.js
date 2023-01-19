import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div id='home' className='hero-container'>
      <h1>JENNIFER BATES</h1>
      <p>Project Manager & Software Engineer</p>
      <a href='#projects' className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          CONTACT ME
        </Button>
      </a>
    </div>
  )
}

export default HeroSection;
