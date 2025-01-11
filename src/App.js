import './App.css';
import BackToTop from './common/BackToTop';
import Footer from './common/Footer';
import Builder from './components/Builder';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import UpComingProject from './components/UpComingProject';
import Values from './components/Values';

function App() {
  return (
    <>
      <Hero />
      <UpComingProject />
      <Services />
      <Projects />
      <Builder />
      <Values />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
