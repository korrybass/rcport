import React, { Component } from 'react';
import Hero from '../Hero/Hero.js'
// import Body from '../Body/Body.js'

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className="home flex-column between">
        <Hero />
        {/*<Body />*/}
      </div>
    );
  }
}

export default Home;
