import React, { Component } from 'react';
import './header.scss';
import logo from '../../assets/img/penhead_logo4.png';
import Work from '../Work/Work.js';
import Home from '../Home/Home.js';
import Resume from '../Resume/Resume.js';

// import { Router } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory'

class Header extends Component {

  openNav(){
    this.refs.sideNav.style.width = '250px';
  }
  closeNav(){
    this.refs.sideNav.style.width = '0';    
  }

  render() {
    return (
      <Router >
      <div>
         <div className="header flex-row between">
          <div className="nav-logo"> <Link to="/"><img className="logo" src={logo} alt='' /></Link> </div>
          
            <div className='nav-container'>
              <div className="triangle-menu" onClick={() => { this.openNav() }}></div>
              {/*<ul className="flex-row ">
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">Resume</Link></li>
                <li><Link to="/topics">Topics</Link></li>
              </ul>*/}
            </div>
            <div ref='sideNav' className="sidenav">
              <a className="closebtn" onClick={() => {this.closeNav()}}>&times;</a>
              <Link to="/about">Resume</Link>
              <Link to="/work">Work</Link>
            </div>
          </div>
          <div className="view-wrapper">
            <Route exact path="/" component={Home}/>            
        <Route path="/work" component={Work}/>
        <Route path="/about" component={Resume}/>
          </div>
      </div>
   </Router > 

     
    );
  }
}

export default Header;
