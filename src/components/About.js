import React, { useEffect, useState, useRef } from 'react';
import '../styles/about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'HTML', level: 95 },
    { name: 'SQL', level: 95 },
    { name: 'React', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'Java', level: 85 },
    { name: 'PHP', level: 85 },
    { name: 'C++', level: 80 },
    { name: 'Angular', level: 75 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const getSkillLevel = (level) => {
    if (level >= 95) return 'Expert';
    if (level >= 85) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section className="about" ref={aboutRef}>
      <h1 className="about-header">What do i offer?</h1>

      <div className="about-paragraphs">
        <p>
          I am a <strong>dedicated web developer</strong> passionate about
          creating <strong>functional</strong> and <strong>user-friendly</strong>{' '}
          digital solutions. My focus is on crafting <em>clean</em> and <em>efficient code</em>{' '}
          while staying up-to-date with the{' '} <strong>latest technologies</strong>. From designing <span className="highlight">seamless websites</span> to
          solving intricate programming challenges, I strive to deliver tools that enhance lives and foster connection.
        </p>
      </div>

      <blockquote className="about-quote">
        <p>
          "Code is more than just a tool—it is a bridge to connect people and
          ideas in meaningful ways."
        </p>
      </blockquote>

      <div className="skills-container">
        <h2>What are my skills?</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill" key={skill.name}>
              <h3>{skill.name}</h3>
              <div
                className="progress-bar"
                style={{
                  '--progress-width': isVisible ? `${skill.level}%` : '0%',
                }}
              >
                <div className={`progress ${isVisible ? 'load' : ''}`}></div>
              </div>
              <div className="skill-level">{getSkillLevel(skill.level)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
