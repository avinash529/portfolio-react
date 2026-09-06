import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="space-footer">
      <div className="space-footer__container">
        <div className="space-footer__columns">
          {/* Column 1: Identity */}
          <div className="space-footer__col">
            <div className="space-footer__brand">
              <div className="space-footer__logo-orb">
                <BsStars className="space-footer__logo-icon" />
              </div>
              <span className="space-footer__brand-title">Avinash Raju</span>
            </div>
            <p className="space-footer__brand-desc">
              Senior PHP Developer &amp; Backend Architect specializing in CodeIgniter,
              Laravel, MySQL, and scalable web platforms. Based in Kochi, India.
            </p>
          </div>

          {/* Column 2: Community & Code */}
          <div className="space-footer__col">
            <h4 className="space-footer__col-title">Community &amp; Code</h4>
            <ul className="space-footer__links">
              <li>
                <a
                  href="https://github.com/avinash529"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-footer__link"
                >
                  <FaGithub /> GitHub Repositories
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avinash529/quiz-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-footer__link"
                >
                  Quiz App (AWS Live)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avinash529/code360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-footer__link"
                >
                  Code360 Developer Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Professional Connect */}
          <div className="space-footer__col">
            <h4 className="space-footer__col-title">Professional Connect</h4>
            <ul className="space-footer__links">
              <li>
                <a
                  href="https://www.linkedin.com/in/avinash-raju-b8b154184/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-footer__link"
                >
                  <FaLinkedin /> LinkedIn Network
                </a>
              </li>
              <li>
                <a
                  href="mailto:avinashraju815@gmail.com"
                  className="space-footer__link"
                >
                  <FaEnvelope /> Direct Email Dispatch
                </a>
              </li>
              <li>
                <a
                  href="/cv/Avinash_Raju.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="space-footer__link"
                >
                  Curriculum Vitae (PDF)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-footer__bottom">
          <p className="space-footer__copy">
            &copy; {new Date().getFullYear()} Avinash Raju. All rights reserved.
          </p>
          <p className="space-footer__tech">
            Crafted with Three.js 3D, React &amp; Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
