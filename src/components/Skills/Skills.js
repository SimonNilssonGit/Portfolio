import React from 'react'

import {  DiFirebase, DiReact, DiVisualstudio } from 'react-icons/di';
import './SkillsStyles.css';
import '../../index.css';

const Skills = () => {
    return (
        <section className="section" id="skills">
    <div className="section-divider"></div>
    <br />
    <br />
    <h2 className="section-title">Kunskaper</h2>
    <p className="section-text">
      Jag har arbetat med följande språk och ramverk.
    </p>
    <ul className="list">

      <li className="list-item">
        <DiReact size="3rem" />
        <div className="list-container">
          <h1 className="list-item">Front-End</h1>
          <p className="list-p">
            Erfarenhet utav <br />
            JavaScript <br />
            React.js <br />
            HTML5 <br />
            CSS <br />
          </p>
        </div>
      </li>

      <li className="list-item">
        <DiFirebase size="3rem" />
        <div className="list-container">
          <h1 className="list-item">Back-End</h1>
          <p className="list-p">
            Erfarenhet utav <br />
            Java <br />
            C# <br />
            SQL <br />
          </p>
        </div>
      </li>

      <li className="list-item">
        <DiVisualstudio size="3rem" />
        <div className="list-container">
          <h1 className="list-item">Verktyg</h1>
          <p className="list-p">
            Erfarenhet utav <br />
            Github/Git <br />
            Eclipse/Netbeans <br />
            Visual Studio/VS Code <br />
            Unity <br />
            Figma <br />
            MySQL <br />
            Dialogflow <br />
          </p>
        </div>
      </li>
    </ul>
  </section>
    )
}

export default Skills
