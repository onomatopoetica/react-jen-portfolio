import React from 'react';
// import { Link } from 'react-router-dom';
import CardItem from './CardItem';
import './Cards.css';
import fitness from '../images/fitness.png';
import codeqz from '../images/codeqz.png';
import employees from '../images/employees.png';
import evolvejournal from '../images/evolvejournal.png';
import pickyeaterapp from '../images/pickyeaterapp.png';
import traveltracker from '../images/traveltracker.png';

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
            <div id='about' className='intro'>
                <p className='summary__intro'>I am a web developer + technical project manager with a passion for delighting the customer. I am also a self-proclaimed nerd. I have always enjoyed working in technology for its dynamic, ever-evolving landscape. As a technical project manager I managed many complex projects with a talented team of UX/UI designers and developers. We created everything from HMIs for industrial machines, to GUIs for remote monitoring devices, to user experience flows for client onboarding applications.</p>

                <p className='summary__intro'>I am energized by environments in which I can combine creativity and problem solving!</p>
            </div>

            <div id='projects' className='cards'>
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
                                img src={evolvejournal}
                                text='A progressive web app! This group project fitness
                                journal uses a Node + Express server with a mySQL database + a Sequelize ORM and an MVC design paradigm. This application is deployed on
                                Heroku.'
                                label='Evolve Fitness Journal'
                                url='https://github.com/onomatopoetica/evolve'
                                appURL='https://evolve-journal.herokuapp.com/'
                            />

                            <CardItem
                                img src={codeqz}
                                text='Students have 75 seconds to
                                take a JavaScript quiz testing their knowledge of the
                                fundamentals. The app stores high scores enabling students to gauge their
                                progress compared to their
                                peers. Deployed on GitHub.'
                                label='JavaScript Code Quiz'
                                url='https://github.com/onomatopoetica/code-quiz'
                                appURL='https://onomatopoetica.github.io/code-quiz/'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={employees}
                                text="An employee directory app using React to create UI components, manage component state and respond to user input events. Random User API is used to demonstrate app functionality. Results begin to render in the table as the user types."
                                label='React Employee Directory'
                                url='https://github.com/onomatopoetica/react-employee-directory'
                                appURL='https://onomatopoetica.github.io/react-employee-directory/'
                            />
                            <CardItem
                                img src={pickyeaterapp}
                                text='A group project using jQuery + Spoonacular API
                                creates a resource for people with food sensitivities. The user can search by specific
                                dietary
                                requirements to view a recipe, ingredients,
                                instructions + view more information about the recipe.'
                                label='Picky Eater Recipe App'
                                url='https://github.com/jkriese12/picky-eater'
                                appURL='https://jkriese12.github.io/picky-eater/'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={fitness}
                                text='A fitness (workout) tracker incorporates a Mongo database with a Mongoose schema and routing with Express. The app uses MongoDB Atlas cloud database to store user data. The app is deployed on Heroku.'
                                label='Fitness Tracker'
                                url='https://github.com/onomatopoetica/workout-tracker'
                                appURL='https://immense-inlet-26212.herokuapp.com/'
                            />
                            <CardItem
                                img src={traveltracker}
                                text='A responsive budget tracker progressive web app (PWA) with offline functionality. Deposits and expenses are stored in a MongoDB Atlas cloud database. The app is deployed on Heroku.'
                                label='Travel Budget'
                                url='https://github.com/onomatopoetica/budget-tracker'
                                appURL='https://agile-river-83351.herokuapp.com/'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
