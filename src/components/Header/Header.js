import React, { Component } from 'react';
import './header.scss';
import logo from '../../assets/img/penhead_logo4.png';
import Work from '../Work/Work.js';
import Home from '../Home/Home.js';
import Resume from '../Resume/Resume.js';

// import { Router } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

class Header extends Component {
  render() {
    return (
      <Router >
      <div>
         <div className="header flex-row between">
          <div className="nav-logo"> <img className="logo" src={logo} alt='' /> </div>
            <div className='nav-container'>
              <ul className="flex-row ">
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">Resume</Link></li>
                {/*<li><Link to="/topics">Topics</Link></li>*/}
              </ul>
            </div>
          </div>
        <Route exact path="/" component={Home}/>            
        <Route path="/work" component={Work}/>
        <Route path="/about" component={Resume}/>
      </div>
   </Router > 

     
    );
  }
}

export default Header;
