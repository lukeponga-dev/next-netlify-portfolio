import React from 'react';

const Projects = () => {
    const projects = [
        { name: 'DSD-2-VideoStore', description: 'A project related to the Diploma in Software Development.' },
        { name: 'DSD05HorseBetRace', description: 'An assessment project for the Diploma in Software Development.' },
        { name: 'FizzBuzzProject', description: 'A classic coding challenge implemented in C#.' },
        { name: 'university-java-data-structures', description: 'Data Structures and Algorithms in Java - university assignments.' },
        { name: 'lukeponga-portfolio', description: 'Luke Ponga\'s personal portfolio.' },
        { name: 'My-Portfolio-Gatsby', description: 'A Gatsby version of Luke Ponga\'s portfolio.' },
        { name: 'Weekly-Tutorials', description: 'A repository for weekly tutorials.' },
        { name: 'skills', description: 'A repository created for the GitHub Copilot build challenge.' }
    ];

    return (
        <section>
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                </div>
            ))}
        </section>
    );
};

export default Projects;
