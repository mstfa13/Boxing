import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useLanguage, languages } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = language.code === 'en' ? languages[1] : languages[0];
    setLanguage(newLang);
  };

  const navItems = {
    en: [
      { label: 'Home', href: '#home' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Coaches', href: '#coaches' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'About', href: '#about' },
      { label: 'FAQ', href: '#faq' },
    ],
    ar: [
      { label: 'الرئيسية', href: '#home' },
      { label: 'كيف يعمل', href: '#how-it-works' },
      { label: 'المدربون', href: '#coaches' },
      { label: 'الأسعار', href: '#pricing' },
      { label: 'آراء العملاء', href: '#testimonials' },
      { label: 'من نحن', href: '#about' },
      { label: 'الأسئلة', href: '#faq' },
    ],
  };

  const currentNavItems = navItems[language.code];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-1.5 sm:space-x-2 rtl:space-x-reverse"
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/images/omaboxlogo.jpeg" 
              alt="zeeprivate Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
            />
            <span className="text-xl sm:text-2xl font-display font-bold text-dark-900">
              zee<span className="text-primary-600">private</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {currentNavItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-dark-700 hover:text-primary-600 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* CTA & Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse text-dark-700 hover:text-primary-600 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={20} />
              <span className="text-sm font-medium">{language.code === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <motion.a
              href="https://wa.me/201289996001"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 rtl:space-x-reverse text-dark-700 hover:text-green-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={18} />
            </motion.a>
            <motion.a
              href="/booking"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language.code === 'en' ? 'Book Now' : 'احجز الآن'}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-dark-900 p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-dark-100"
          >
            <div className="container-custom py-4 space-y-4">
              {currentNavItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="block py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-dark-100">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-dark-700 hover:text-primary-600 transition-colors py-2"
                >
                  <Globe size={20} />
                  <span className="font-medium">
                    {language.code === 'en' ? 'العربية' : 'English'}
                  </span>
                </button>
                <a href="/booking" className="btn-primary text-center" onClick={() => setIsOpen(false)}>
                  {language.code === 'en' ? 'Book Your Coach Now' : 'احجز مدربك الآن'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
