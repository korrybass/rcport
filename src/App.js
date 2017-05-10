import React, { Component } from 'react';
import './App.css';
import Work from './components/Work/Work.js';
import Resume from './components/Resume/Resume.js';
import Home from './components/Home/Home.js';
// import { Router, Route, hashHistory } from 'react-router';

class App extends Component {

  constructor(){
    super();
    this.state = {
      windowHeight: ""
    }
  }

  initScroll(){
    var lastPosition = -100;
    let smoothElem = this.refs['smooth'];
    let wrapper = this.refs['site-wrapper']

    this.windowHeight = smoothElem.clientHeight
    window.addEventListener("resize", () => {
      this.setState({ windowHeight:  this.windowHeight})
    });

var scroll = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // IE Fallback, you can even fallback to onscroll
    function(callback) {
        window.setTimeout(callback, 1000 / 60)
    };

function loop() {

    // Avoid calculations if not needed
    if (lastPosition === window.pageYOffset) {
        scroll(loop);
        return false;
    } else lastPosition = window.pageYOffset;
  
    var transform = 'translate3d(0px, -' + lastPosition + 'px, 0px)';
    var smoothScoll = smoothElem;
    
    smoothScoll.style.webkitTransform = transform;
    smoothScoll.style.mozTransform = transform;
    smoothScoll.style.transform = transform;
    scroll(loop)
}

// Call the loop for the first time
loop();

  }

  componentDidMount(){
    this.initScroll();
    this.setState({ windowHeight:  this.windowHeight})
  }

  render() {
    return (
      <div className="App" ref="site-wrapper">
        
        <div className="smooth" ref="smooth">
         
        </div>
      </div>
    );
  }
}

export default App;
