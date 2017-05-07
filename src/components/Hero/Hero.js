import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import bg from '../../assets/img/bg/pencils3.jpg'
import logo from '../../assets/img//penhead_logo4.png'

import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero flex-row between">
        <Parallax className="hero-parallax" bgImage={bg} strength={200}>
            <div>
              <div className="envelope open">
                <div className="flap front"></div>
                <div className="flap top"></div>
                <div className="letter"><img className="logo" src={logo} alt='' /></div>
              </div>
            </div>
        </Parallax>
      </div>
    );
  }
}

export default Hero;
