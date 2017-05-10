import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import bg from '../../assets/img/bg/letterp2.jpg';
import ph from '../../assets/img/penhead-walk2.png'

import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero flex-row between">
        <Parallax className="hero-parallax" bgImage={bg} strength={300}>
            <div>
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
        </Parallax>
      </div>
    );
  }
}

export default Hero;
