import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import bg from '../../assets/img/org-poly.jpg'
import './hero.scss';

class Hero extends Component {
  render() {
    return (
      <div className="hero flex-row between">
        <Parallax className="hero-parallax" bgImage={bg} strength={300}>
          <Background>
            <div>
              <div className="envelope open">
                <div className="flap front"></div>
                <div className="flap top"></div>
                <div className="letter"></div>
              </div>
            </div>
          </Background>
        </Parallax>
      </div>
    );
  }
}

export default Hero;
