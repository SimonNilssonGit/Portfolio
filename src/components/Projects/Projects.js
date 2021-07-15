import React, { useState } from 'react'

import './ProjectsStyles.css';
import '../../index.css';
import { projectsWeb, projectsApps, projectsGames } from '../../constants/constants';

const Projects = ({setSelectedImg }) => {

const [tab, setTab] = useState(projectsWeb);

const tabTitle = () => {
  var titleText;
  if(tab === projectsWeb){
    titleText = "Web";
  }else if(tab === projectsApps){
    titleText = "Apps";
  }else{
    titleText = "Games";
  }
  return titleText;
}

    return (
        <section id="projects" className="section">
            <div className="section-divider"></div>
            <h2 className="section-title">Projekt</h2>
            
            <div>
            <ul className="tab-list">
            <li className="tab" onClick={() => setTab(projectsWeb)}>Web</li>
            <li className="tab" onClick={() => setTab(projectsApps)}>Apps</li>
            <li className="tab" onClick={() => setTab(projectsGames)}>Games</li>
            </ul>
            </div>

            <h3 className="styled-h3"> {tabTitle()}</h3>
            <section className="grid-section">
                {tab.map(({id, image, title, description, tags, source, visit }) => (
                
                <div className="project-card" key={id}>
                <div onClick={() => setSelectedImg(image)} >
                <img className="project-img" src={image[0]} alt="project-thumbnail" />
                </div>
                
                <div className="title-content">
                <h3 className="styled-h3"> {title} </h3>
                <hr className="styled-hr"/> 
                </div>
                <p className="card-info">{description} </p>
                <div>
                <div className="title-content"><p className="sub-title">Utvecklad med</p> </div>
                <ul className="tag-list"> 
                {tags.map((tag, i) => (
                <li className="tag" key={i}> {tag} </li>
                ))} 
                </ul>
            </div>
          <ul className="utility-list">
            { visit && <a className="external-link" 
            href={visit} target="_blank" rel="noopener noreferrer" >Demo</a> }
            { source && <a className="external-link" 
            href={source} target="_blank" rel="noopener noreferrer" >GitHub</a> }
          </ul>
        </div>
      ))}
    </section>
  </section>
    )
}

export default Projects
