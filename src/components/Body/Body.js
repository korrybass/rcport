import React, { Component } from 'react';
import ph from '../../assets/img/penhead-walk2.png';

import './body.scss';

class Body extends Component {
  render() {
    return (
      <div className="body flex-row between">
        <div className="envelope open">
          <div className="flap front"></div>
          <div className="flap top"></div>
          <div className="letter flex-row">
            <div className="flex-row letter-inner-wrapper">
              <img alt="" className="ph" src={ph} />
              <p> <span className="bold">Penhead \ˈpen-hed\</span> - an organism that turns chai lattes into software.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
