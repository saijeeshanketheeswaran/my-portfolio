import React from 'react';
import githublogo from '../assets/github-mark-white.png';
import linkedinlogo from '../assets/InBug-White.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-name">Sai Ketheeswaran</h1>
      <div className="header-socials">
        <a href="https://github.com/saijeeshanketheeswaran" target="_blank" rel="noopener noreferrer">
          <img src={githublogo} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://ca.linkedin.com/in/saijeeshanketheeswaran" target="_blank" rel="noopener noreferrer">
          <img src={linkedinlogo} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="mailto:your-email@example.com">
        </a>
      </div>
    </header>
  );
};

export default Header;
