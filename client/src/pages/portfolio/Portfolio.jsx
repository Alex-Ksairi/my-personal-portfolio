import React from 'react';
import './Portfolio.scss';
import Title from '../../components/title/Title';

import portfolioData from '../../data/portfolio';

export default function Portfolio() {
    return (
        <React.Fragment>
            <div className="div" id="portfolio">
                <Title title="Portfolio"/>
                <div className="subtitle">My recently work</div>
            </div>
            <section className="portfolio-section">
                {portfolioData.map(item => {
                    return <div className="portfolio-container" key={item.id}>
                            <div className="portfolio-card">
                                <div className="portfolio-date">Created at: {item.date}</div>
                                <div className="portfolio-title">{item.title}</div>
                                <div className="portfolio-para">{item.para}</div>
                                <div className="portfolio-anchors">
                                    {item.links.map(btn => {
                                        return <div className="div" key={btn.id}>
                                            <a href={btn.vercel} className="portfolio-vercel btn" target='_blank' rel="noreferrer">Go Live<i className="fas fa-chevron-right"></i> </a>
                                            <a href={btn.gitHub} className="portfolio-gitHub btn" target='_blank' rel="noreferrer">Check code<i className="fas fa-chevron-right"></i> </a>
                                        </div>
                                    })}
                                </div>
                            </div>
                    </div>
                })}
            </section>
        </React.Fragment>
    )
}