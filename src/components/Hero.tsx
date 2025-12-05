import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, Star, Users, Award, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVideoOpen) {
        setIsVideoOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isVideoOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVideoOpen]);

  const content = {
    en: {
      headline: 'Professional Boxing Training',
      subheadline: 'Right at Your Doorstep',
      description: 'Book certified boxing coaches to train at your home or preferred location in Egypt. Expert training, flexible scheduling, affordable pricing.',
      ctaPrimary: 'Book Your Coach Now',
      ctaSecondary: 'Watch How It Works',
      stats: [
        { value: '50+', label: 'Expert Coaches' },
        { value: '10K+', label: 'Sessions Completed' },
        { value: '4.9', label: 'Average Rating', icon: Star },
      ],
    },
    ar: {
      headline: 'تدريب ملاكمة احترافي',
      subheadline: 'مباشرة على عتبة بابك',
      description: 'احجز مدربي الملاكمة المعتمدين للتدريب في منزلك أو موقعك المفضل في مصر. تدريب متخصص، جدولة مرنة، أسعار معقولة.',
      ctaPrimary: 'احجز مدربك الآن',
      ctaSecondary: 'شاهد كيف يعمل',
      stats: [
        { value: '+50', label: 'مدرب متخصص' },
        { value: '+10 آلاف', label: 'جلسة مكتملة' },
        { value: '4.9', label: 'متوسط التقييم', icon: Star },
      ],
    },
  };

  const t = content[language.code];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900/95 via-dark-900/80 to-dark-900/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-900/50" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-12 px-4">
        <div className="flex flex-col items-center text-center">
          {/* Text Content - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6 w-full"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="px-3 py-2 bg-primary-600/20 border border-primary-500/30 rounded-full text-xs sm:text-sm font-semibold text-primary-400 backdrop-blur-sm">
                  🥊 Founded by Coach Omar Mohamed
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight px-2"
              >
                {t.headline}
                <br />
                <span className="text-primary-500">{t.subheadline}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-dark-200 leading-relaxed max-w-2xl mx-auto px-4"
              >
                {t.description}
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-md mx-auto px-4"
            >
              <motion.a
                href="/booking"
                className="btn-primary flex items-center justify-center space-x-2 rtl:space-x-reverse group w-full sm:w-auto flex-1"
                whileTap={{ scale: 0.95 }}
              >
                <span>{t.ctaPrimary}</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => setIsVideoOpen(true)}
                className="btn-outline flex items-center justify-center space-x-2 rtl:space-x-reverse group w-full sm:w-auto"
                whileTap={{ scale: 0.95 }}
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                <span>{t.ctaSecondary}</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-8 max-w-xl mx-auto"
            >
              {t.stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-500">
                      {stat.value}
                    </p>
                    {stat.icon && <stat.icon size={16} className="text-yellow-400 fill-current sm:w-5 sm:h-5" />}
                  </div>
                  <p className="text-xs sm:text-sm text-dark-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element - Simplified for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative w-full max-w-sm mx-auto mt-8 hidden"
          >
            {/* Floating Card */}
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=700&fit=crop"
                  alt="Professional Boxing Coach"
                  className="rounded-2xl shadow-2xl"
                />
                
                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-8 -left-8 bg-white rounded-xl shadow-xl p-4 backdrop-blur-sm bg-white/95"
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Award className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-dark-900">100%</p>
                      <p className="text-xs text-dark-600">Certified</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 -right-8 bg-white rounded-xl shadow-xl p-4 backdrop-blur-sm bg-white/95"
                >
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-dark-900">2K+</p>
                      <p className="text-xs text-dark-600">Happy Clients</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 right-10 w-full h-full border-4 border-primary-500/20 rounded-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-3 bg-white rounded-full mt-2"
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
            onClick={() => setIsVideoOpen(false)}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
              />
            </div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Container with Custom Styling */}
              <div className="relative bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl overflow-hidden shadow-2xl border border-primary-500/20">
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600" />
                
                {/* Header */}
                <div className="relative bg-gradient-to-b from-dark-900/95 to-transparent px-6 py-4 flex items-center justify-between border-b border-white/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Play size={20} className="text-white fill-current" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">How OmaBox Works</h3>
                      <p className="text-dark-300 text-sm">Discover professional boxing training at home</p>
                    </div>
                  </div>
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setIsVideoOpen(false)}
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full transition-colors border border-white/10"
                  >
                    <X size={20} className="text-white" />
                  </motion.button>
                </div>

                {/* Video Player with Frame */}
                <div className="relative p-4">
                  <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-inner">
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary-500 rounded-tl-lg pointer-events-none z-10" />
                    <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary-500 rounded-tr-lg pointer-events-none z-10" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary-500 rounded-bl-lg pointer-events-none z-10" />
                    <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary-500 rounded-br-lg pointer-events-none z-10" />
                    
                    {/* YouTube Video */}
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/IcSLWd7TcL0?autoplay=1&rel=0&modestbranding=1"
                      title="How OmaBox Works"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Footer with Additional Info */}
                <div className="px-6 py-4 bg-gradient-to-t from-dark-900/95 to-transparent border-t border-white/5">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <span className="text-dark-300">Ready to start?</span>
                      <motion.a
                        href="/booking"
                        onClick={() => setIsVideoOpen(false)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Book Now
                      </motion.a>
                    </div>
                    <div className="text-dark-400 text-xs">
                      Press ESC to close
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-primary-600/20 rounded-3xl blur-xl -z-10" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
