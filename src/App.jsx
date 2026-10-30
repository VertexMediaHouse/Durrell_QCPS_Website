import './App.css';
import { useReveal } from './useReveal';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { SearchBar } from './sections/SearchBar';
import { Properties } from './sections/Properties';
import { Services } from './sections/Services';
import { WhyUs } from './sections/WhyUs';
import { About } from './sections/About';
import { Steps } from './sections/Steps';
import { Testimonials } from './sections/Testimonials';
import { Journal } from './sections/Journal';
import { Faqs } from './sections/Faqs';
import { Cta } from './sections/Cta';
import { Footer } from './sections/Footer';
import { AboutPage } from './pages/AboutPage';
import { HowItWorksPage } from './pages/HowItWorksPage';

export default function App() {
  useReveal();

  const path = window.location.pathname;

  return (
    <>
      <Header />
      <main>
        {path === '/about' ? (
          <AboutPage />
        ) : path === '/how-it-works' ? (
          <HowItWorksPage />
        ) : (
          <>
            <Hero />
            <SearchBar />
            <Properties />
            <Services />
            <WhyUs />
            <About />
            <Steps />
            <Testimonials />
            <Journal />
            <Faqs />
            <Cta />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
