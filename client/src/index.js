import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// context
import { SkillsProvider } from '../src/store/context';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <SkillsProvider>
      <Router>
        <App />
      </Router>
    </SkillsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


