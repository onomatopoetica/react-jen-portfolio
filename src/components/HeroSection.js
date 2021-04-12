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
    </div>
  )
}

export default HeroSection;
