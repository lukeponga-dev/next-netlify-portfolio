import Head from 'next/head' // Importing the Head component from the 'next/head' module
import Header from '../components/Header' // Importing the Header component from the '../components/Header' file
import AboutMe from '../components/AboutMe' // Importing the AboutMe component from the '../components/AboutMe' file
import Projects from '../components/Projects' // Importing the Projects component from the '../components/Projects' file
import Contact from '../components/Contact' // Importing the Contact component from the '../components/Contact' file
import Footer from '../components/Footer' // Importing the Footer component from the '../components/Footer' file

// Exporting a default function named Home
export default function Home() { 
   
    // A div element with a className of "portfolio"
    return (
        <div className="portfolio">
            <Head>
                <title>Luke Ponga's Portfolio</title>
                <meta name="description" content="Luke Ponga - Junior Software Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <AboutMe />
            <Projects /> {/* Pass the projects array as a prop */}
            <Contact />
            <Footer />
        </div>
    );


};