import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section id='contact'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <h2>CONTACT ME</h2>
                            <p className='email'>jendotb@gmail.com</p>
                            {/* <a href={`mailto:${this.props.email}`}>Contact</a> */}
                            {/* <Link to='/'>Contact</Link> */}
                        </div>
                    </div>
                </div>
            </section>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <p className='social-logo'>
                            Nice to meet you!
                        </p>
                    </div>
                    <h4 className='website-rights'>Made with <i className='fas fa-heart' /> Onomatopoetica © 2021</h4>
                    <div className='social-icons'>
                        <a
                            className='social-icon-link github'
                            href='https://github.com/onomatopoetica'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github' />
                        </a>
                        <a
                            className='social-icon-link twitter'
                            href='https://twitter.com/JenDotB'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/jenbates/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                        <a
                            className='social-icon-link unsplash'
                            href='https://unsplash.com/@jendotb'
                            target='_blank'
                            aria-label='UnSplash'
                        >
                            <i className='fab fa-unsplash' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
