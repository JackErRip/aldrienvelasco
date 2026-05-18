import Background     from '../components/Background';
import ParticleCanvas from '../components/ParticleCanvas';
import ScrollProgress from '../components/ScrollProgress';
import BackToTop      from '../components/BackToTop';
import SoundEffects   from '../components/SoundEffects';
import Navbar         from '../components/Navbar';
import Hero           from '../components/Hero';
import About          from '../components/About';
import Skills         from '../components/Skills';
import Experience     from '../components/Experience';
import Connect        from '../components/Connect';
import Footer         from '../components/Footer';

export default function Home() {
  return (
    <>
      <Background />
      <ParticleCanvas />
      <SoundEffects />
      <ScrollProgress />
      <BackToTop />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Connect />
        <Footer />
      </main>
    </>
  );
}
