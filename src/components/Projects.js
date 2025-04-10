import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import projectOneImage from '../assets/project-one.jpg';

const projectsData = [
  {
    title: '5n2',
    description: 'Description for Project One.',
    link: 'https://google.com',
    url: '5n2.ca',
    image: projectOneImage,
  },
  {
    title: 'Project Two',
    description: 'Description for Project Two.',
    link: 'https://google.com',
    url: 'projecttwo.com',
    image: projectOneImage,
  },
  {
    title: 'Project Three',
    description: 'Description for Project Three.',
    link: 'https://google.com',
    url: 'projectthree.com',
    image: projectOneImage,
  },
  {
    title: 'Project Four',
    description: 'Description for Project Four.',
    link: 'https://google.com',
    url: 'projectfour.com',
    image: projectOneImage,
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
            // Restart typing after a complete cycle
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
    </section>
  );
};

export default Projects;
