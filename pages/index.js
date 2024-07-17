import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
    <Header />

      <main className="portfolio">  {
        <><AboutMe /><Projects /><Contact /></>
      }

      </main>

      <Footer />
    </>
  );
}


