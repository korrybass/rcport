import React, { Component } from 'react';
import './work.scss';
import projects from './projects.json';
import Slider from 'react-slick';
import classnames from 'classnames'

class Work extends Component {
  constructor(){
    super();
    this.state = {
      currentProject: 0
    }
    this.generateSlides = this.generateSlides.bind(this);
    this.generateLink = this.generateLink.bind(this);
    this.prevProject = this.prevProject.bind(this);
    this.nextProject = this.nextProject.bind(this);
  }

  openProjectViewer(idx){
    this.setState({ currentProject: idx })    
    this.refs.projectViewer.style["max-height"] = "100vh";
    this.refs.projectViewer.style["height"] = "100vh";
  }
  closeProjectViewer(){
    this.refs.projectViewer.style["max-height"] = "0";
  }
  nextProject(){
    let proj = this.state.currentProject + 1;
    this.setState({ currentProject: proj })    
    
  }
  prevProject(){
    let proj = this.state.currentProject - 1;
    this.setState({ currentProject: proj })            
  }

  generateSlides(slides){
    return slides.map((x, idx)=> {
      return <img key={idx} alt='' src={x} />;
    });
  }
  generateLink(links){
    return links.map((x, idx) => {
      return <a href={x.link} target="_blank" key={idx}>{x.name}</a>;
    });
  }
  generateProjectLayout(){
    return projects.map((x, idx) => {
      return (
        <a key={idx} className={x.class} onClick={() => { this.openProjectViewer(idx) }} > 
          <h2 className="details">{x.title}</h2>
        </a>)
    })
  }

  render() {
    let settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
    };
    let showLeftArr = (this.state.currentProject > 0) ? 'show': 'hide' ;
    let showRightArr = (this.state.currentProject < projects.length -1) ? 'show': 'hide' ;

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
          {this.generateProjectLayout()}
        </div>

        <div className="project-viewer" ref="projectViewer">
           <a className="closebtn" onClick={() => {this.closeProjectViewer()}}>&times;</a>
          <div className="first">
            <h4 className="type">{projects[this.state.currentProject].type}</h4>
            <h1 className="name">{projects[this.state.currentProject].title}</h1>
            <h5 className="subtitle">{projects[this.state.currentProject].subtitle}</h5>
            <div className="project-arrows">
              <span className={ showLeftArr } onClick={this.prevProject}> &#8592; </span>
              <span className={ showRightArr }  onClick={this.nextProject}> &#8594; </span>
            </div>
          </div>
          <div className="last">
            <div className="images">
               <Slider {...settings}>
                 { this.generateSlides(projects[this.state.currentProject].content.images) }
              </Slider>
            </div>
            <div className="content">
              <p className="content-text">
                {projects[this.state.currentProject].content.text}}
              </p>
            </div>
            <div className="links">
              { this.generateLink(projects[this.state.currentProject].content.links) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
