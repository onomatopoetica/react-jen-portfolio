import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section id='contact'>
                <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-items'>
                            <div>
                                <button
                                    className='btn--medium'
                                    onClick={() => window.location = 'mailto:jendotb@gmail.com'}>
                                    EMAIL ME!
                                </button>
                            </div>
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
                    <div className='social-icons'>
                        <a
                            className='social-icon-link github'
                            href='https://github.com/onomatopoetica'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github' />
                        </a>
                        <a
                            className='social-icon-link linkedin'
                            href='https://www.linkedin.com/in/jenbates/'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </a>
                        <a
                            className='social-icon-link unsplash'
                            href='https://unsplash.com/@jendotb'
                            target='_blank'
                            rel="noreferrer"
                            aria-label='UnSplash'
                        >
                            <i className='fab fa-unsplash' />
                        </a>
                    </div>
                </div>
            </section>
            <h4 className='website-rights'>Made with <i className='fas fa-heart' /> Onomatopoetica © 2021</h4>
        </div>
    );
}

export default Footer;
