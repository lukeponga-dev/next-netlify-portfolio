import Head from 'next/head';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Ponga's Portfolio</title>
        <meta name="description" content="Luke Ponga - Junior Software Developer" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <Header />
      <main className='portfolio'> {/* Wrap content in a <main> element for accessibility */}
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
