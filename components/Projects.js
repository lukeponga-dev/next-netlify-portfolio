
// Projects.js
import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        { name: 'DSD-2-VideoStore', description: 'Functionality: Users can manage video rentals, add new videos, update video information, and track rentals and returns. Database' <br> 'Integration: Utilizes SQL Server for efficient data storage and retrieval. Unit Testing: Includes unit tests to ensure the application’s reliability and correctness. User Interface: Features a user-friendly interface for easy navigation and task management' },
        { name: 'DSD05HorseBetRace', description: 'An assessment project for the Diploma in Software Development.' },
        { name: 'FizzBuzzProject', description: 'A classic coding challenge implemented in C#.' },
        { name: 'university-java-data-structures', description: 'Data Structures and Algorithms in Java - university assignments.' },
        { name: 'lukeponga-portfolio', description: 'Luke Ponga\'s personal portfolio.' },
        { name: 'My-Portfolio-Gatsby', description: 'A Gatsby version of Luke Ponga\'s portfolio.' },
        { name: 'Weekly-Tutorials', description: 'A repository for weekly tutorials.' },
        { name: 'skills', description: 'A repository created for the GitHub Copilot build challenge.' }
    ];

    return (
        <section className={styles['projects-section']}>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className={styles['project-card']}>
                    <h3 className={styles['project-title']}>{project.name}</h3>
                    <p className={styles['project-description']}>{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;
