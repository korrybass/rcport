import React, { Component } from 'react';

import './resume.scss';

class Resume extends Component {
  render() {
    return (
      <div className="work-container flex-row between">
        <h2>Resume</h2>
        <h2>
          I am a front end web developer that loves building dynamic UI experiences using the latest in front end technology (see skills and tech stack below ). In my spare time I analyze programming design patterns and build games as a hobby and a way to think in a different direction...and its fun!
        </h2>
      </div>
    );
  }
}

export default Resume;
