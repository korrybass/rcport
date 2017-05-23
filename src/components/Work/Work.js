import React, { Component } from 'react';

import './work.scss';

class Work extends Component {
  constructor(){
    super();
    this.state = {
      currentProject: null
    }
  }

  openProjectViewer(){
    this.refs.projectViewer.style.display = "block";
  }
  closeProjectViewer(){
    this.refs.projectViewer.style.display = "none";
  }

  render() {
    return (
      <div className="work-container">
        <div>
          <h2 className="title">Work</h2>
        </div>
        <div>
          <ul className="workList">
            <li>Web</li><span className="spacer">: :</span>
            <li>Software</li><span className="spacer">: :</span>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="work-grid">
          <a onClick={() => { this.openProjectViewer(0) }} className="half ducreux">
            <h2 className="details">DucruexJS</h2>
          </a>
          <div className="half highnoon">
            <h2 className="details">HighNoon Calendar</h2>
          </div>
         
        </div>
        <div className="work-grid">
           <div className="half wakati">
            <h2 className="details">Wakati Timer</h2>
          </div>
        </div>

        <div className="project-viewer" ref="projectViewer">
          
        </div>
      </div>
    );
  }
}

export default Work;
