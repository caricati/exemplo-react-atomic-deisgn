import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router } from 'react-router-dom'

import { route } from './pages'
import { MainTemplate } from './templates/main'

ReactDOM.render(
  <Router>
    <MainTemplate> { route } </MainTemplate>
  </Router>
, document.getElementById('root'));

registerServiceWorker();

