import React from 'react';
import alex from '../../images/B8EB34DC-C9A7-4C57-A6E1-B31A83AADD38_1_201_a.jpeg';

import './Personal.scss';


export default function Personal() {
    return (
        <React.Fragment>
            <div className="div-container">
                <div className="div-img">
                    <img className="img" src={alex} alt="Alex" />
                </div>
            </div>
        </React.Fragment>
    )
}
