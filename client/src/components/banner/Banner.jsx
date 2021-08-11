import React from 'react';
import Personal from '../personal-banner/Personal';

import './Banner.scss';

export default function Banner({ firstName, lastName, subtitle, changeTitle, children }) {
    return (
        <React.Fragment>
            <Personal />
            <div className="banner">
                <h1>{firstName} <span>{lastName}</span> </h1>
                <div></div>
                <p>{subtitle} {changeTitle}</p>
                {children}
            </div>
        </React.Fragment>
    )
}
