import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './App.sass';

import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);