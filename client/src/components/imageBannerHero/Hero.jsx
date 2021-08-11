import React from 'react';
import './Hero.scss';

export default function Hero({ children, hero }) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}

Hero.defaultProps = {
    hero: "defaultHero"
};