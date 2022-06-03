import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './App.sass';

import 'mdb-ui-kit/css/mdb.min.css';
import 'mdb-ui-kit/js/mdb.min.js';

import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter><App /></BrowserRouter>);