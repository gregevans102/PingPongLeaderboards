import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import './styles/App.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Router, browserHistory} from 'react-router';
import routes from './routes';

render(
    <Router history={browserHistory} routes={routes} />, 
    document.getElementById('app')
);