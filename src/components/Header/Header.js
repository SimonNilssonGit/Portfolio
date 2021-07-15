import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCoffeescript } from 'react-icons/di';

import './HeaderStyles.css';


const Header = () => {
    return (
        <div className="header-container">
          <div className="logo-div">
            <a className="logo" href="/">
              <DiCoffeescript size='3rem' /> <span className="logo-text">Simon Nilsson</span>
            </a>
          </div>
      <div className="links-div">
        <li>
          <a className="nav-link" href="#projects">Projekt</a>
        </li>
        <li>
          <a className="nav-link" href="#skills">Kunskaper</a>
        </li>
        <li>
          <a className="nav-link" href="#about">Om mig</a>
        </li>
      </div>
      <div className="socials-div">
      <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/simon-nilsson-profil/">
        <AiFillLinkedin size="3rem" />
      </a>
      <a className="social-icon" target="_blank" rel="noopener noreferrer" href="https://github.com/SimonNilssonGit">
        <AiFillGithub size="3rem" />
      </a>
      </div>
  </div>
    )
}

export default Header
