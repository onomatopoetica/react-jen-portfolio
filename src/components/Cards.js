import React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
import fromthesky from '../images/fromthesky.jpeg';
import sunflower from '../images/sunflower.jpeg';
import pinkrunner from '../images/pinkrunner.png';
import turks from '../images/turks.jpeg';
import turksbeach from '../images/turksbeach.jpeg';
import tulum from '../images/tulum.jpeg';

// const projects = [
//     {
//         name: 'project1',
//         description: 'lorem ipsum',
//         image: turks,
//         GitHub: 'https://github.com/onomatopoetica',
//         App: 'https://agile-river-83351.herokuapp.com/'
//     },
//     {
//         name: 'project2',
//         description: 'lorem ipsum',
//         image: sunflower,
//         GitHub: 'https://github.com/onomatopoetica',
//         App: 'https://agile-river-83351.herokuapp.com/'
//     },
//     {
//         name: 'project3',
//         description: 'lorem ipsum',
//         image: pinkrunner,
//         GitHub: 'https://github.com/onomatopoetica',
//         App: 'https://agile-river-83351.herokuapp.com/'
//     },
//     {
//         name: 'project4',
//         description: 'lorem ipsum',
//         image: turksbeach,
//         GitHub: 'https://github.com/onomatopoetica',
//         App: 'https://agile-river-83351.herokuapp.com/'
//     }
// ];



function Cards() {
    return (

        <>
            <div className='intro'>
                <p className='summary__intro'>I am a web developer + technical project manager with a passion for delighting the customer. I am also a self-proclaimed nerd. I have always enjoyed working in technology for its dynamic, ever-evolving landscape. As a technical project manager I managed many complex projects with a talented team of UX/UI designers and developers. We created everything from HMIs for industrial machines, to GUIs for remote monitoring devices, to user experience flows for client onboarding applications.</p>

                <p className='summary__intro'>I am energized by environments in which I can combine creativity and problem solving!</p>
            </div>

            <div className='cards'>
                <h1>Check out my projects!</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            {/* {projects.map((project, index) => {
                            let jsxContent;
                            if (index % 2 !== 0) {
                                // Specify <CardItem>
                                // Specify </ul>
                            } else {
                                // Specify <ul>
                                <CardItem
                                    img src={project.image}
                                    text={project.description}
                                    label={project.name}
                           
                                     githubUrl={project.GitHub}
                                     appUrl={project.App}
                                // "window.location.href = 'https://github.com/onomatopoetica'"
                                // GitHub='https://github.com/onomatopoetica'
                                />
                            }
                        })} */}
                            <CardItem
                                img src={turks}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project one'
                                url='https://github.com/onomatopoetica'
                                appURL='https://agile-river-83351.herokuapp.com/'
                            />

                            <CardItem
                                img src={sunflower}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project two'

                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={pinkrunner}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project three'

                            />
                            <CardItem
                                img src={turksbeach}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project four'

                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={fromthesky}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project five'

                            />
                            <CardItem
                                img src={tulum}
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                                label='project six'

                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
