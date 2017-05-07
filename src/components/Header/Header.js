import React, { Component } from 'react';
import './header.scss';
import logo from '../../assets/img//penhead_logo4.png'


class Header extends Component {
  render() {
    return (
      <div className="header flex-row between">
        <div className="nav-logo"> <img className="logo" src={logo} alt='' /> </div>
        <div className='nav-container'>
          <ul className="flex-row ">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>              
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
