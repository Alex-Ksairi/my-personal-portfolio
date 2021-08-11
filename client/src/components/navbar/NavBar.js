import React from 'react';

// importing Link
import { Link } from "react-router-dom";

// importing scss
import './NavBar.scss';

// social media variables
let gitHub = 'https://github.com/Alex-Ksairi';
let linkedIn = 'https://www.linkedin.com/in/alexander-ksairi-7563a1211/';
let vercel = 'https://vercel.com/dashboard';
const facebook = 'https://www.facebook.com/alexander.azar.71';
const instagram = 'https://www.instagram.com/alexw_atch/';

export default function NavBar() {
    // // collapse the menu bar by using useState
    let [isOpen, setIsOpen] = React.useState(true);

    // scrollToTop
    let scrollToTop = () => {
        return window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
        });
    }

    return (
        <React.Fragment>
            <nav className="nav nav-dark" id={isOpen ? '' : 'radius'}>
                <div className="nav-opened-container nav-closed-container">
                    <Link to="/" className="nav-logo" onClick={scrollToTop}>
                        <div className="own-logo">
                            <div className="logo-name"> <div className="first-name">alexander</div> <span className="span-last-name">ksairi</span> </div>
                        </div>
                    </Link>
                    <div className="navigation" id={isOpen ? "hidden" : ""} onClick={() => setIsOpen(!isOpen)}> 
                        <div className="links">
                            <Link to="/" onClick={scrollToTop}><i className="fas fa-home"></i>home</Link>
                        </div>
                        <div className="links">                           
                            <a href="#about"><i className="fas fa-user"></i>about</a>
                        </div>
                        <div className="links">                           
                            <a href="#skills"><i className="fas fa-file-alt"></i>skills</a>
                        </div>
                        <div className="links">                           
                            <a href="#qualification"><i className="fas fa-project-diagram"></i>qualification</a>
                        </div>
                        
                        <div className="links">                         
                            <a href="#portfolio"><i className="fas fa-image"></i>portfolio</a>
                        </div>
                        <div className="links">
                            <Link to="/contact-me"><i className="fab fa-telegram-plane"></i>contact me</Link>
                        </div>
                    </div>
                    <div className="social-media" id={isOpen ? "hidden" : ""} onClick={() => setIsOpen(!isOpen)}> 
                        <a href={gitHub} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                        <a href={linkedIn} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href={vercel} target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
                        <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                        <a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    </div>
                    
                    <div className="nav-close" id={isOpen ? "hidden" : ""} onClick={() => setIsOpen(!isOpen)}>x</div>
                    <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}><i className="fas fa-bars" id={isOpen ? "" : "hidden"}></i></div>
                </div>
            </nav>
        </React.Fragment>
    )
}