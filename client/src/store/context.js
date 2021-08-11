import React, { useState } from 'react';

// importing data
import data from '../data/data';

// declaring a variable of React.createContext with an empty string
const SkillsContext = React.createContext();


function SkillsProvider({ children }) {
    const [value] = useState(data);
    // console.log(value);
    
    return (
        <React.Fragment>
            <SkillsContext.Provider value={{ value }}>
                {children}
            </SkillsContext.Provider>
        </React.Fragment>
    )
};

export { SkillsProvider, SkillsContext };

