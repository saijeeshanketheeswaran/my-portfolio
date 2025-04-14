import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import projectOneImage from '../assets/5n2.png';
import projectTwoImage from '../assets/portfolio.png'

const projectsData = [
  {
    title: '5n2',
    description: '',
    link: 'https://5n2.ca',
    url: '5n2.ca',
    image: projectOneImage,
  },
  {
    title: 'Portfolio',
    description: '',
    link: '',
    url: 'Created with React.js.',
    image: projectTwoImage,
  },
];

const Projects = () => {
  const [typedUrls, setTypedUrls] = useState([]);

  useEffect(() => {
    const initializeTypedUrls = projectsData.map(() => ({ url: '', completed: false }));
    setTypedUrls(initializeTypedUrls);

    const intervals = projectsData.map((project, index) => {
      let charIndex = 0;
      const maxCharCount = project.url.length;
      return setInterval(() => {
        setTypedUrls((prev) => {
          const updated = [...prev];
          if (charIndex < maxCharCount) {
            updated[index].url += project.url[charIndex];
            charIndex++;
          } else if (!updated[index].completed) {
            updated[index].completed = true;
          } else {
            
            updated[index].url = '';
            updated[index].completed = false;
            charIndex = 0;
          }
          return updated;
        });
      }, 500); 
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <section className="projects-section" id="projects">

      <h1 className="projects-title">Check out my work!</h1>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className="project-header">
              <div className="mac-buttons">
                <span className="button red"></span>
                <span className="button yellow"></span>
                <span className="button green"></span>
              </div>
              <div className="address-bar">
                {typedUrls[index]?.url || ''}
                <span className="cursor">|</span>
              </div>
            </div>
            <img src={project.image} alt={project.title} className="project-image" />
          </a>
        ))}
      </div>
      
      <a href="https://github.com/saijeeshanketheeswaran?tab=repositories" target="_blank" rel="noopener noreferrer"><h1 className="projects-other">check other work on Github...</h1></a>
    </section>
  );
};

export default Projects;
