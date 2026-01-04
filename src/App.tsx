import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Coaches from './components/Coaches';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import AppDownload from './components/AppDownload';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Booking from './pages/Booking';
import NotifyMe from './pages/NotifyMe';
import WhatsAppButton from './components/WhatsAppButton';

function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Coaches />
      <Benefits />
      <Pricing />
      <Testimonials />
      <About />
      <AppDownload />
      <FAQ />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App overflow-x-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/notify-me" element={<NotifyMe />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
