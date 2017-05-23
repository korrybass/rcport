import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/img/bg/building4-2.jpg';
// import triangle from '../../assets/img/triangle.svg';
// import ph from '../../assets/img/penhead-walk2.png';

import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero flex-row between">
        {/*<Parallax className="hero-parallax" bgImage={bg} strength={300}>*/}
            <div className="hero-content">
              <div className="intro">
                <h4>Korry Bass</h4>
                <h3>Front End</h3>
                <h3>Web Developer</h3>                
              </div>
              {/*<img className="triangle" alt="" src={triangle}/>
              <div className="hero-tag">
                <p>Think it.</p>
                <p>Draft it.</p>
                <p>Execute...</p>
              <img className="" alt="" src={ph}/>
              </div>*/}
            </div>
        {/*</Parallax>*/}
      </div>
    );
  }
}

export default Hero;
