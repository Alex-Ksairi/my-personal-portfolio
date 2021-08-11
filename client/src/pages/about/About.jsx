import React from 'react';

import './About.scss';

import Title from '../../components/title/Title';

// alex photo
import alex_pic from "../../images/22594264-55D5-4991-97A4-2628B6B5D022_1_201_a.jpeg";

// pdf
import Resume from '../../pdf/Alex-resumé.pdf'

// dci url
let dci_url = 'https://digitalcareerinstitute.org/';


export default function About() {

    return (
        <React.Fragment>
            <div className="div" id="about">
                <Title title="About"/>
            </div>
            <div className="container">
                <div className="image-container">
                    <img className="about-img" src={alex_pic} alt="Alex" />
                </div>
                <div className="content-container">
                    <div className="content-header">
                        <h2>I'm alexander ksairi and <span>web developer</span> </h2>
                        <p>Hi ! My name is <span>Alexander Ksairi</span>, 28 years old and I come from Syria, Damascus! My journey in IT began since I set up my Facebook account. I was amazed at its functionality and how everything works, from setting up profiles to sharing thoughts with others. Incredible! After leaving my country in 2015 and starting a new life in Germany, learning its language and culture, I started studying computer science at the University of Leipzig. Unfortunately, things didn't go well for me. But I am known as a person who does not give up. After a short time of restarting with an apprenticeship 2020 in order to fulfil my dream of becoming a web developer, I ended up at the Digital Career Institute in Hamburg (DCI), where I developed my knowledge of various programming languages starting from frontend such as HTML5, CSS3 and JavaScript including Bootstrap and Node-Sass, and continued with backend (MERN). People say that I have great design skills that allow me to pay attention to small details and make my projects even more attractive by keeping my work clean, structured and readable. I'm very passionate and dedicated to my work.</p>
                    </div>
                    <div className="content-info">
                        <div className="info-icons">
                            <div className="icon">
                                <i className="fas fa-calendar-alt"></i> 
                                <span className="text text-one">Date of Birth:</span>
                                <span className="details details-one">04-28-1993</span>
                            </div> 
                            <div className="icon">
                                <i className="fas fa-book-open"></i>
                                <span className="text text-two">Current study:</span>
                                <span className="details details-two"><a href={dci_url}>Digital Career Institute</a></span>
                            </div>
                            <div className="icon">
                                <i className="fas fa-envelope"></i> 
                                <span className="text text-three">Email address:</span> 
                                <span className="details details-three">alexanderksairi@web.de</span>
                            </div>
                            <div className="icon">
                                <i className="fas fa-mobile"></i>
                                <span className="text text-four">Phone:</span>
                                <span className="details details-four">+49 1575 8628 903</span> 
                            </div>
                        </div>
                    </div>
                    <div className="content-cv-btn">
                        <a href={Resume} target="_blank" rel="noreferrer" ><button className="btn cv">download cv</button></a>
                        <a href="/contact-me"><button className="btn message">contact me</button></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
