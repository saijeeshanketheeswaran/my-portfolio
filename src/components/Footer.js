import React from 'react';
import githublogo from '../assets/github-mark.png';
import linkedinlogo from '../assets/LI-In-Bug.png';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Thank you for visiting my portfolio!</p>

        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={githublogo} alt="GitHub" className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={linkedinlogo} alt="LinkedIn" className="footer-icon" />
          </a>
        </div>

        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Sai Ketheeswaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
