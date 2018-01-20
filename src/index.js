import React from 'react';
import ReactDOM from 'react-dom';

import Main from './Main';
import registerServiceWorker from './registerServiceWorker';

import './styles/main.css';

ReactDOM.render(<Main />, document.getElementById('open-for-you'));
registerServiceWorker();
