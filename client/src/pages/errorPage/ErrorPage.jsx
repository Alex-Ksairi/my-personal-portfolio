import React from 'react';
import Hero from '../../components/imageBannerHero/Hero';
import Banner from '../../components/banner/Banner';

export default function ErrorPage() {

    React.useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <React.Fragment>
            <Hero>
                <Banner firstName="OOPS!" lastName="404" subtitle="The page you are looking for might be removed or had its name changed or temporarily unavailable">
                    <br />
                    <br />
                    <a href="/"><button className="btn">return home</button></a>
                </Banner>
            </Hero>
        </React.Fragment>
    )
}
