import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { testimonials } from '../data';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    en: {
      title: 'What Our Clients Say',
      subtitle: 'Real stories from real people achieving their boxing goals',
    },
    ar: {
      title: 'ماذا يقول عملاؤنا',
      subtitle: 'قصص حقيقية من أشخاص حقيقيين يحققون أهدافهم في الملاكمة',
    },
  };

  const t = content[language.code];
  const isArabic = language.code === 'ar';

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 gradient-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-dark-300 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Main Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Image */}
                <div className="mx-auto">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-white/20">
                      <img
                        src={currentTestimonial.photo}
                        alt={isArabic ? currentTestimonial.nameAr : currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-4 -right-4 bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                      <Quote size={28} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-2 space-y-4">
                  {/* Stars */}
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={`${
                          i < currentTestimonial.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-dark-600'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    "{isArabic ? currentTestimonial.textAr : currentTestimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="pt-4">
                    <p className="font-display font-bold text-xl text-white">
                      {isArabic ? currentTestimonial.nameAr : currentTestimonial.name}
                    </p>
                    <p className="text-dark-300 text-sm">
                      {isArabic ? currentTestimonial.locationAr : currentTestimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-8 rtl:space-x-reverse mt-8">
            <motion.button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all ${
                    index === currentIndex
                      ? 'w-8 h-2 bg-primary-500'
                      : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                  } rounded-full`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>

        {/* Testimonial Grid - Additional Reviews */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-1 rtl:space-x-reverse mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-dark-600'
                    }`}
                  />
                ))}
              </div>
              <p className="text-dark-200 text-sm mb-4 line-clamp-3">
                "{isArabic ? testimonial.textAr : testimonial.text}"
              </p>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src={testimonial.photo}
                  alt={isArabic ? testimonial.nameAr : testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-white text-sm">
                    {isArabic ? testimonial.nameAr : testimonial.name}
                  </p>
                  <p className="text-dark-400 text-xs">
                    {isArabic ? testimonial.locationAr : testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
