import React, { Component } from 'react';
import './work.scss';
import projects from './projects.json';

class Work extends Component {
  constructor(){
    super();
    this.state = {
      currentProject: 0
    }
  }

  openProjectViewer(idx){
    this.refs.projectViewer.style["max-height"] = "100vh";
    this.refs.projectViewer.style["height"] = "100vh";
    this.setState({ currentProject: idx })
  }
  closeProjectViewer(){
    this.refs.projectViewer.style["max-height"] = "0";
  }

  render() {
    return (
      <div className="work-container">
        <div>
          <h2 className="title">Work</h2>
        </div>
        <div>
          <ul className="workList">
            <li>All</li><span className="spacer">: :</span>
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
           <a className="closebtn" onClick={() => {this.closeProjectViewer()}}>&times;</a>
          <div className="first">
            <h4 className="type">{projects[this.state.currentProject].type}</h4>
            <h1 className="name">{projects[this.state.currentProject].title}</h1>
            <h5 className="subtitle">{projects[this.state.currentProject].subtitle}</h5>
          </div>
          <div className="last">
            <div className="images">

            </div>
            <div className="content">
              <p className="content-text">
                Simple Frontend Utility Framework.<br/>
                This framework was created to help with normal frontend tasks such as validation, simple elem querying, custom directives, element height equalizer, videoBox (only for self hosted videos and youtube videos), simple UI masking, geolocation. Still in very experimental state will be streamlined and new features added soon.
              </p>
            </div>
            <div className="links">
              <a href="">Demo Site</a>
              <a href="">Github</a>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
