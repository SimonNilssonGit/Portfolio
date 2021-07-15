import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import './FooterStyles.css';

const Footer = () => {
    return (
        <section className="section" id="footer">
        <div className="footer-container">
            <ul className="link-list">
                <div className="link-column">
                    <h4 className="link-title">Email</h4>
                    <a className="link-item" href="mailto:SimonNilsson94@hotmail.com">SimonNilsson94@hotmail.com</a>
                </div>
                <div className="link-column">
                    <h4 className="link-title">Telefon</h4>
                    <a className="link-item" href="tel:0738054860">0738054860</a>
                </div>
            </ul>
            
                <div className="social-icons-container">
                    <div className="company-container">
                        <p className="slogan">Simon Nilsson</p>
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
        </div>
        </section>
    )
}

export default Footer
