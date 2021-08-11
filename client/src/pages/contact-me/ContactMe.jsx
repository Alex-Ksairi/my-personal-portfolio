import React from 'react';
import './ContactMe.scss';
import Hero from '../../components/imageBannerHero/Hero';
import Title from '../../components/title/Title';
import Banner from '../../components/banner/Banner';

// axiosApiInstance
import ApiInstance from '../../util/APiInstance';

import alex from '../../images/22594264-55D5-4991-97A4-2628B6B5D022_1_201_a.jpeg';

export default function ContactMe() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const [status, setStatus] = React.useState("Submit");
    const [user, setUser] = React.useState('');
    const [hideAlert, setHideAlert] = React.useState('alert2');

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject , message } = e.target.elements;
    
        let data = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
        };

        ApiInstance.post('/contact', data)
            .then(response => {
                return response.data
            })
            .then((view) => {
                // console.log(view);
                setStatus('sending...');
                setUser(data.name);

                setTimeout(() => {
                    setHideAlert('alert');
                }, 4000);

                setTimeout(() => {
                    setStatus("submit");
                    e.target.reset();
                }, 3000);

                setInterval(() => {
                    setHideAlert('alert2');
                }, 10000);
            })
            .catch(error => {
                // console.log(error.message);
                alert('Unfortunately, email couldn\'t be sent. Please try again later!');
                e.target.reset();
            });
    };

    return (
        <React.Fragment>
            <Hero>
                <Banner firstName="Alexander" lastName="Ksairi">
                    <a href="/"><button className="btn">return home</button></a>
                </Banner>
            </Hero>
            <div className="div">
                <Title title="Contact"/>
                <div className="contact-subtitle">Hire me, let's connect and build a crazier digital world together</div>
            </div>
            <div className="contact-container">
                <div className="sub-container">
                    <div className="image-container">
                        <div className="image-div">
                            <img src={alex} alt="Alex"/>
                        </div>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <label htmlFor="name">full name*</label>
                        <input type="text" id="name" required />

                        <label htmlFor="email">email address*</label>
                        <input type="email" id="email" required />
                    
                        <label htmlFor="subject">subject*</label>
                        <input type="text" id="subject" required />
                   
                        <label htmlFor="message">Message*</label>
                        <textarea id="message" required />
                    
                        <button type="submit" className="btn">{status}</button>
                        <div className={hideAlert}><p>Dear {user}, you successfully sent me your message. I will try to get in touch with you as soon as possible!</p></div>
                        
                        <div className="availability">
                            <p>I am available for freelance work. Connect with me via phone: <a href="..">+49 1575 8628 903</a> or email: <a href="alexanderksairi@web.de">alexanderksairi@web.de</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}