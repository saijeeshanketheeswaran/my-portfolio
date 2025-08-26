import React from 'react';
import '../styles/hero.css';
import logo from '../assets/profile.jpeg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img
          src={logo}
          alt="Profile"
          className="hero-profile-image"
        />
        <h1>Hello, I am Sai!</h1>
        <h2 className="tagline">Crafting Digital Experiences</h2>
        <p>
          A passionate front end developer focused on creating beautiful and functional applications.
        </p>
        <a href="#projects" className="hero-button">View My Projects</a>
      </div>
    </section>
  );
};

export default Hero;
