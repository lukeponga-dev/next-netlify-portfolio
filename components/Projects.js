import React from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'DSD-2-VideoStore',
    description: 'A C# project for managing video rentals, including adding new videos, updating information, and tracking rentals and returns. It integrates with SQL Server for data storage and includes unit tests for reliability.',
    link: 'https://github.com/lukeponga-dev/DSD-2-VideoStore'
  },
  {
    title: 'Doctors_Appointments_DSD06',
    description: 'An ASP.NET project for managing doctor appointments.',
    link: 'https://github.com/lukeponga-dev/Doctors_Appointments_DSD06'
  },
  {
    title: 'react-tictactoe',
    description: 'A JavaScript project where you created a Tic-Tac-Toe game using React.',
    link: 'https://github.com/lukeponga-dev/react-tictactoe'
  },
  {
    title: 'NZSpeedCameras-Android',
    description: 'An Android app that shows speed cameras on a map and sends notifications when the user is near a camera.',
    link: 'https://github.com/lukeponga-dev/NZSpeedCameras-Android'
  },
  {
    title: 'CryptoCoins-Price-Stats',
    description: 'A project to track cryptocurrency prices.',
    link: 'https://github.com/lukeponga-dev/CryptoCoins-Price-Stats'
  }
];

const Projects = () => (
  <div>
    <h1>My Projects</h1>
    <section className={styles['projects-section']}>
      {projects.map((project, index) => (
        <div key={index} className={styles['project-card']}>
          <h3 className={styles['project-title']}>{project.title}</h3>
          <p className={styles['project-description']}>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  </div>
);

export default Projects;
