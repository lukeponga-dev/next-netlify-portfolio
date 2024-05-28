import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
import './styles/global.css/';
import './styles/style.css';
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
            <p>...</p>
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
