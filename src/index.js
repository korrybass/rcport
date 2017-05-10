import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Work from './components/Work/Work.js';
import Resume from './components/Resume/Resume.js';
import Home from './components/Home/Home.js';
import Header from './components/Header/Header.js'
import { Router } from 'react-router'
import { Route, HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import './index.css';

let appHistory = createHistory();
ReactDOM.render(
  <div>
    <Header />  
  </div>
  ,
  document.getElementById('root')
);
