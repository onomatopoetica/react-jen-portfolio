import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import fromthesky from '../images/fromthesky.jpeg';
import sunflower from '../images/sunflower.jpeg';
import pinkrunner from '../images/pinkrunner.png';
import turks from '../images/turks.jpeg';
import turksbeach from '../images/turksbeach.jpeg';
import tulum from '../images/tulum.jpeg';


function Cards() {
    return (
        <div className='cards'>
            <h1>Check out my projects!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            img src={turks}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project one'
                            path='/services'
                        />
                        <CardItem
                            img src={sunflower}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project two'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            img src={pinkrunner}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project three'
                            path='/services'
                        />
                        <CardItem
                            img src={turksbeach}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project four'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            img src={fromthesky}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project five'
                            path='/projects'
                        />
                        <CardItem
                            img src={tulum}
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                            label='project six'
                            path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
