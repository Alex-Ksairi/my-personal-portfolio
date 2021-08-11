import React from 'react';
import './Skills.scss';
import Title from '../../components/title/Title';

import { SkillsContext } from '../../store/context'

export default function Skills() {

    const { value } = React.useContext(SkillsContext);
    // console.log(value);
    
    return (
        <React.Fragment>
            <div className='div' id="skills">
                <Title title="Skills"/>
            </div>
            <section className="skills-section">
                <div className="skills-subtitle">My technical level</div>
                <div className="skills-container container-grid">
                    {/* frontend */}
                    {value.map((item) => (
                        <div className="skills-content" key={item.id} data-aos="fade-right" data-aos-duration="3000">
                        <div className="skills-header">
                            <i className={item.icon} id="code-icon"></i>
                            <div className="skills-title">
                                <h1>{item.title}</h1>
                                <span>{item.experience}</span>
                            </div>
                        </div>
                        <div className="skills-list grid">
                            <div className="skills-data">
                                <div id="skills-title">
                                    {item.skills.map(skill => (
                                        <div key={skill.name}>
                                            <h3 className="skill-name">{skill.name}</h3>
                                            <div className="progress-bar">
                                                <div className="percent" style={{ width: skill.percentage }}>{skill.percentage}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </section>
        </React.Fragment>
    )
}