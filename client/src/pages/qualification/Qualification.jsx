import React from 'react';
import './Qualification.scss';
import Title from '../../components/title/Title';

import qualificationData from '../../data/qualificationData';

export default function Qualification() {
    return (
        <React.Fragment>
            <div className="div" id="qualification">
                <Title title="Qualification"/>
                <div className="qualification-subtitle">My personal journey</div>
            </div>
            <section className="qualification-section">
            <div className="qualification-container">
                {qualificationData.map(data => {
                    return <div className="education-section" key={data.id}>
                            <div className="qualification-header">
                                <i className={data.icon}></i>
                                <h1>{data.title}</h1>
                            </div>
                            {data.info.map(info => {
                                return <div className="qualification-info" key={info.id} data-aos="fade-up"
                                data-aos-duration="3000">
                                    <div className="qualification-content">
                                        <h4>{info.date}</h4>
                                        <h2>{info.header}</h2>
                                        <h4>{info.location}</h4>
                                        {info.details.map(detail => {
                                            return <ul key={detail.id}>
                                                <li>{detail.first}</li>
                                                <li>{detail.second}</li>
                                                <li>{detail.third}</li>
                                                <li>{detail.fourth}</li>
                                            </ul>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>
            </section>
        </React.Fragment>
    )
}


/*

<div className="qualification-container">
                    {qualificationData.map(data => {
                        return <div className="education-section">
                            <div className="qualification-header">
                                <i className={data.icon}></i>
                                <h1>{data.title}</h1>
                            </div>
                            {qualificationData.info.map(info => {
                                return <div className="qualification-info">
                                    <div className="qualification-content">
                                        <h4>{info.date}</h4>
                                            <hr style={{ width: '30%', margin: '10px 0' }}/>
                                        <h2>{info.header}</h2>
                                            <hr style={{ width: '30%', margin: '10px 0' }}/>
                                        <h4>{info.location}</h4>
                                            <hr style={{ width: '30%', margin: '10px 0' }}/>
                                        {qualificationData.info.details.map(detail => {
                                            return <ul>
                                                <li>{detail}</li>
                                            </ul>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>
                    })}
                </div>


*/