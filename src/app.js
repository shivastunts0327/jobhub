import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/style.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<AppRouter />, document.getElementById('app'));

