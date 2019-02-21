import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';

dotenv.config();

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
