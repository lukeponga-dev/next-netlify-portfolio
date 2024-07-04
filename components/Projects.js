import React from 'react';
import styles from './Projects.module.css';
const Projects = () => {
const projects = [
  {
    name: 'DSD-2-VideoStore',
    description: 'Functionality: Users can manage video rentals, add new videos, update video information, and track rentals and returns. Database Integration: Utilizes SQL Server for efficient data storage and retrieval. Unit Testing: Includes unit tests to ensure the application’s reliability and correctness. User Interface: Features a user-friendly interface for easy navigation and task management.'
  },
  {
    name: 'Doctors_Appointments_DSD06',
    description: 'An ASP.NET project for managing doctor appointments.'
  },
  {
    name: 'react-tictactoe',
    description: 'A JavaScript project where you created a Tic-Tac-Toe game using React.'
  },
  {
    name: 'NZSpeedCameras-Android',
    description: 'An Android app that shows speed cameras on a map and sends notifications when the user is near a camera.'
  },
  {
    name: 'CryptoCoins-Price-Stats',
    description: 'A project to track cryptocurrency prices.'
  }
];

return (
  <div className={styles['projects-section']}>
    <h2>My Projects</h2>
    {projects.map((project, index) => (
      <div key={index} className={styles['project-card']}>
        <h3 className={styles['project-title']}>{project.name}</h3>
        <p className={styles['project-description']}>{project.description}</p>
      </div>
    ))}
  </div>
);
};
export default Projects;
