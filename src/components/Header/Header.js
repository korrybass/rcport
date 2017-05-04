import React, { Component } from 'react';
import './header.scss';


class Header extends Component {
  render() {
    return (
      <div className="header flex-row between">
        <div className="logo"> Logo </div>
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
