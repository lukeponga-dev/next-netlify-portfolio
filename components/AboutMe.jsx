// AboutMe.js
import React from 'react';
import styles from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className={styles.aboutSection}>
            <h1>About Me</h1>
            <p>Hello! I'm Luke Ponga, a Junior Software Developer based in Hamilton, New Zealand. I'm passionate about crafting user-friendly solutions and contributing to innovative projects. With hands-on experience in MS SQL Server, .NET platform development, and proficiency in C#, JavaScript, HTML, and CSS, I'm ready to bring your vision to life.</p>
            <p>When I'm not coding, you can find me exploring the great outdoors, camera in hand. I'm an avid hiker and photographer, and I often combine these hobbies to capture the beauty of nature. These adventures reinforce my belief in continuous learning and improvement, principles I carry into my professional life.</p>
            <p>I'm excited about the future of technology and am eager to collaborate with experienced developers and continue learning in this dynamic environment. If you're interested in working together or just want to say hi, feel free to reach out at lukeponga9@gmail.com.</p>

 <h2>Skills</h2>
<div>
    <h3>Programming Languages</h3>
    <ul>
        <li>C#</li>
        <li>JavaScript</li>
    </ul>
</div>
<div>
    <h3>Frameworks/Libraries</h3>
    <ul>
        <li>.NET Platform</li>
        <li>ASP.NET</li>
        <li>React</li>
    </ul>
</div>
<div>
    <h3>Databases</h3>
    <ul>
        <li>MS SQL Server</li>
        <li>PostgreSQL</li>
    </ul>
</div>
<div>
    <h3>Tools</h3>
    <ul>
        <li>Git</li>
        <li>Agile Methodologies</li>
    </ul>
</div>

        </div>
    );
}

export default AboutMe;
