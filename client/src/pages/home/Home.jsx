import React from 'react';

// importing components
import Hero from '../../components/imageBannerHero/Hero';
import Banner from '../../components/banner/Banner';

// importing pages
import About from '../../pages/about/About';
import Skills from '../../pages/skills/Skills';
// import Services from '../../pages/services/Services';
import Portfolio from '../../pages/portfolio/Portfolio';
import Qualification from '../qualification/Qualification';

let Text = ['Full-stack Web Developer', 'Web Designer', 'Photographer'];

let intervalID;

export default function Home() {

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        window.scrollTop = 0;
        indexFunction();
        return () => clearInterval(intervalID);
    }, [index]); // , [index]

    const indexFunction = () => {
        intervalID = setInterval(() => {
            setIndex(index => {
                index = index + 1;
                if (index === 3) {
                    index = 0
                }
                return index;
            });
        }, 3000);
    }

    return (
        <React.Fragment>
            <Hero>
                <Banner firstName="Alexander" lastName="Ksairi" changeTitle={Text[index]}>
                </Banner>
            </Hero>
            <About id="about"/>
            <Skills id="skills"/>
            <Qualification id="qualification" />
            
            <Portfolio id="portfolio"/>
        </React.Fragment>
    )
}


// changeTitle={Text[index]}
// <Services id="services"/>