import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import fitness from '../images/fitness.png';
import codeqz from '../images/codeqz.png';
import books from '../images/books.png';
import evolvejournal from '../images/evolvejournal.png';
import pickyeaterapp from '../images/pickyeaterapp.png';
import traveltracker from '../images/traveltracker.png';
import jen from '../images/jen.jpeg';

function Cards() {
    return (

        <>
            <div id='about' className='intro'>
                <h1 className='summary__head'>HELLO!</h1>
                <img className='jen' alt="self" src={jen}></img>
                <p className='summary__intro'>I'm Jen. Thank you for visiting my portfolio. I am a technical project manager and software engineer with a passion for creating beautiful interfaces. I am also a self-proclaimed nerd. I have always enjoyed working in technology for its dynamic, ever-evolving landscape. </p>

                <p className='summary__intro'> In both roles, I completed many complex projects collaborating with telematics, backend, UX design, and product management teams in dynamic, fast-paced startup environments to build proprietary HMI components and cloud platforms for everything from electric vehicles, to industrial machines, to GUIs for remote monitoring devices.</p>

                <p className='summary__intro'>I am energized by environments in which I can combine creativity and problem solving! When I'm not coding, I love to scuba dive in the Caribbean and train for half-marathons.</p>
            </div>

            <div id='projects' className='cards'>
                <h1>PROJECTS</h1>
                <p className='projects__intro'>Six projects I enjoyed working on are highlighted below. Select <b>'GitHub'</b> for the project repository and the code behind the app. Select <b>'Live App'</b> to view
                    the deployed
                    project! Visit my full GitHub repository at: <a
                        className="onomatopoetica" href="https://github.com/onomatopoetica"
                        target="_blank" rel="noreferrer">Onomatopoetica</a>. <b>Please note: Apps deployed
                            on Heroku take a little longer to load.</b> </p>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
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
                                progress. This app is deployed on GitHub.'
                                label='JavaScript Code Quiz'
                                url='https://github.com/onomatopoetica/code-quiz'
                                appURL='https://onomatopoetica.github.io/code-quiz/'
                            />
                        </ul>
                        <ul className='cards__items'>
                            <CardItem
                                img src={books}
                                text="A books search application with React, Node, Express and MongoDB utilizing the Google Books API.
                                The user can search for a book to render a list of books relevant to the search word. The user can save their favorite book titles. Deployed on Heroku."
                                label='React Google Books Search'
                                url='https://github.com/onomatopoetica/react-google-books-search'
                                appURL='https://react-googlebooks-search-app.herokuapp.com/'
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
                                text='A fitness tracker incorporates a Mongo database and Mongoose schema routing with Express. The app uses MongoDB Atlas cloud database to store user data. Deployed on Heroku.'
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
