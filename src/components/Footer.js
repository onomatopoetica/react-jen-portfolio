import React from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section id='footer'>
                {/* <section className='footer-subscription' > */}
                {/* <p className='footer-subscription-heading'>Subscribe!</p>
                <p className='footer-subscription-text'>You can unsubscribe at any time.</p> */}
                {/* <div className='input-areas'> */}
                {/* <form>
                        <input
                            className='footer-input'
                            type='email'
                            name='email'
                            placeholder='name@mail.com'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form> */}
                {/* </div> */}
                {/* </section> */}
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    {/* <div className='footer-link-items'>
                        <h2>About Me</h2>
                        <Link to='/sign-up'>About Me</Link>
                        <Link to='/'>Testimonials</Link>
                    </div> */}
                    <div className='footer-link-items'>
                        <h2>Contact Me</h2>
                        <p className='email'>jendotb@gmail.com</p>
                        {/* <a href={`mailto:${this.props.email}`}>Contact</a> */}
                        {/* <Link to='/'>Contact</Link> */}
                    </div>
                </div>
                {/* <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link url='https://github.com/onomatopoetica'>GitHub</Link>
                        <Link to='/'>Twitter</Link>
                        <Link to='/'>LinkedIn</Link>
                        <Link to='/'>Unsplash</Link>
                    </div>
                </div> */}

            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <p className='social-logo'>
                            Nice to meet you!
                        </p>
                    </div>
                    <h4 className='website-rights'>Made with <i className='fas fa-heart' /> Onomatopoetica © 2021</h4>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link github'
                            to='https://www.twitter.com'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link
                            className='social-icon-link unsplash'
                            to='/'
                            target='_blank'
                            aria-label='UnSplash'
                        >
                            <i className='fab fa-unsplash' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
