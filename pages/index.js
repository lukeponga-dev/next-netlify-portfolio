import Head from 'next/head'
// import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
// import Projects from '../components/Projects'
// import Contact from '../components/Contact'
// import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="portfolio">
      <Head>
        <title>Luke Ponga's Portfolio</title>
        <meta name="description" content="Luke Ponga - Junior Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
