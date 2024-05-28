import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'


export default function Home() {
  return (
        <div className="portfolio">
            <Header />
            <AboutMe />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Welcome to My Portfolio</h1>
        </header>
    );
}

const AboutMe = () => {
    return (
        <section>
            <h2>About Me</h2>
            <p>Hello! I'm Luke Ponga, a Junior Software Developer based in Hamilton, New Zealand. I'm passionate about crafting user-friendly solutions and contributing to innovative projects. With hands-on experience in MS SQL Server, .NET platform development, and proficiency in C#, JavaScript, HTML, and CSS, I'm ready to bring your vision to life.

I completed my Level 6 Diploma in Software Development at ATC Vision College, where I also earned my ISTQB Certification at the Foundation Level. Prior to that, I received a Level 5 Diploma in Web Development & Design from the same institution. My education has provided me with a strong foundation in software development and web design.

When I'm not coding, you can find me exploring the great outdoors, camera in hand. I'm an avid hiker and photographer, and I often combine these hobbies to capture the beauty of nature. These adventures reinforce my belief in continuous learning and improvement, principles I carry into my professional life.

I'm excited about the future of technology and am eager to collaborate with experienced developers and continue learning in this dynamic environment. If you're interested in working together or just want to say hi, feel free to reach out at lukeponga9@gmail.com.
</p>
        </section>
    );
}

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <p>...</p>
        </section>
    );
}

const Contact = () => {
    return (
        <section>
            <h2>Contact</h2>
            <p>...</p>
        </section>
    );
}

const Footer = () => {
    return (
        <footer>
            <p>© 2024 Lukeponga-dev</p>
        </footer>
    );
}
