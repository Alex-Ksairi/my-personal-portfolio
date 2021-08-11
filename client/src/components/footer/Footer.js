import React from 'react';
import './Footer.scss'

const location = 'https://www.google.com/maps/place/Stuhlmannstra%C3%9Fe+4,+22767+Hamburg/@53.554212,9.9436861,17z/data=!3m1!4b1!4m5!3m4!1s0x47b18f63a7233d11:0xa81a8e8303ed136b!8m2!3d53.554212!4d9.9458748';

// social media
const gitHub = 'https://github.com/Alex-Ksairi';
const xing = 'https://www.xing.com/profile/Alexander_Ksairi/cv';
const linkedIn = 'https://www.linkedin.com/in/alexander-ksairi-7563a1211/';
const facebook = 'https://www.facebook.com/alexander.azar.71';
const instagram = 'https://www.instagram.com/alexw_atch/';

export default function Footer() {
    // scrollToTop
    let scrollToTop = () => {
        return window.scrollTo({
                left: 0,
                top: 0,
                behavior: 'smooth',
        });
    }

    return (
        <footer className='footer'>
            <div className="main-container">
                <div className="about-us">
                    <h3>summery</h3>
                    <hr />
                    <p>I'm a highly motivated full-stack web-developer who eagerly learns from mistakes. I try to enhance my code structuring to be readable, clearer, and attractively designed. I greatly believe that determination, skill, passion, and discipline are the key to being successful in life. I believe in working unceasingly towards my purposes in spite of any obstacles, difficulties, or failures along the way. The most thrilling part of being a web developer is problem solving and innovative, versatile coding.</p>
                </div>
                <div className="contact">
                    <div className="contact-info">
                        <h3>contact info</h3>
                        <hr />
                        <div className="email">
                            <span><i className="fas fa-paper-plane"></i></span>
                            <span><a href="..">alexanderksairi@web.de</a></span>
                        </div>
                        <div className="phone">
                            <span><i className="fas fa-phone-alt"></i></span>
                            <span><a href="..">+49 1575 8628 903</a></span>
                        </div>
                        <div className="location">
                            <span><i className="far fa-map"></i></span>
                            <span><a href={location} target="_blank" rel="noreferrer">location</a></span>
                        </div>
                    </div>

                    <div className="contact-social-media">
                        <h3>social media</h3>
                        <hr />
                        <span><a href={gitHub} target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
                        <span><a href={linkedIn} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></span>
                        <span><a href={xing} target="_blank" rel="noreferrer"><i className="fab fa-xing-square"></i></a></span>
                        <span><a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></span>
                        <span><a href={instagram} target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></span>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="copyright">
                    <p>all rights ©️ 2020 - 2021</p>
                    <span><a href="..">AGB</a></span>
                    <span><a href="..">Impressum</a></span>
                </div>
                <div className="go-top" onClick={scrollToTop}>
                    <i className="fas fa-arrow-up"></i>
                </div>
            </div>
        </footer>
    )
}
