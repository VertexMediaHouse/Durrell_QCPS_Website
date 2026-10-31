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
import { WhoWeHelpPage } from './pages/WhoWeHelpPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { FaqPage } from './pages/FaqPage';
import { ComparePage } from './pages/ComparePage';
import { AreasPage } from './pages/AreasPage';
import { ReviewsPage } from './pages/ReviewsPage';

// ponytail: pathname lookup, no router dep. Swap in react-router if these
// ever need client-side navigation or nested/dynamic routes.
const pages = {
  '/about': AboutPage,
  '/how-it-works': HowItWorksPage,
  '/who-we-help': WhoWeHelpPage,
  '/contact': ContactPage,
  '/privacy-policy': PrivacyPage,
  '/faqs': FaqPage,
  '/faq': FaqPage,
  '/compare': ComparePage,
  '/cash-offer-vs-agent': ComparePage,
  '/areas-we-serve': AreasPage,
  '/buyer-reviews': ReviewsPage,
  '/get-my-offer': ContactPage,
};

export default function App() {
  useReveal();

  const Page = pages[window.location.pathname];

  return (
    <>
      <Header />
      <main>
        {Page ? (
          <Page />
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
