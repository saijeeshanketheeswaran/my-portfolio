import React, { useEffect, useState, useRef } from 'react';
import '../styles/about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  const skills = [
    { name: 'JavaScript', level: 95 },
    { name: 'HTML', level: 95 },
    { name: 'React.js', level: 85 },
    { name: 'SEO', level: 85 },
    { name: 'CSS', level: 95 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 85 },
    { name: 'PHP', level: 85 },
    { name: 'SQL', level: 95 },
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
      <h1 className="about-header">What do I offer?</h1>

      <div className="about-paragraphs">
        <p>
            I am a dedicated <strong>front end developer</strong> passionate about
          creating <strong>functional</strong> and <strong>user-friendly</strong>{' '}
          digital solutions. My focus is on crafting clean and efficient code{' '}
          while staying up-to-date with the{' '} <strong>latest technologies</strong>. From designing <span className="highlight"><strong>seamless</strong> and <strong>unique</strong> webpages</span> to
          solving intricate programming challenges, I strive to deliver solutions that enhance the user experience.
        </p>
      </div>

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
