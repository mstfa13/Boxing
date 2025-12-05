import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { coaches } from '../data';

const Coaches: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Meet Our Expert Coaches',
      subtitle: 'Certified professionals ready to help you achieve your boxing goals',
      experience: 'Years Experience',
      sessions: 'Sessions',
      certified: 'Certified',
      viewProfile: 'View Profile',
      bookNow: 'Book Now',
    },
    ar: {
      title: 'تعرف على مدربينا المتخصصين',
      subtitle: 'محترفون معتمدون مستعدون لمساعدتك على تحقيق أهدافك في الملاكمة',
      experience: 'سنوات الخبرة',
      sessions: 'الجلسات',
      certified: 'معتمد',
      viewProfile: 'عرض الملف',
      bookNow: 'احجز الآن',
    },
  };

  const t = content[language.code];
  const isArabic = language.code === 'ar';

  return (
    <section id="coaches" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="section-heading">{t.title}</h2>
          <p className="section-subheading">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden h-80">
                  <img
                    src={coach.photo}
                    alt={isArabic ? coach.nameAr : coach.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  
                  {/* Certified Badge */}
                  {coach.certified && (
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1 rtl:space-x-reverse shadow-lg">
                      <Award size={16} className="text-primary-600" />
                      <span className="text-xs font-semibold text-dark-900">{t.certified}</span>
                    </div>
                  )}

                  {/* Rating */}
                  <div className="absolute top-4 left-4 bg-dark-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center space-x-1 rtl:space-x-reverse">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-bold text-white">{coach.rating}</span>
                  </div>

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-display font-bold text-white mb-1">
                      {isArabic ? coach.nameAr : coach.name}
                    </h3>
                    <p className="text-primary-400 text-sm font-medium">
                      {isArabic ? coach.specialtyAr : coach.specialty}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-dark-600 text-sm leading-relaxed">
                    {isArabic ? coach.bioAr : coach.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse">
                        <TrendingUp size={16} className="text-primary-600" />
                        <p className="text-xl font-bold text-dark-900">{coach.experience}</p>
                      </div>
                      <p className="text-xs text-dark-500 mt-1">{t.experience}</p>
                    </div>
                    <div className="w-px h-12 bg-dark-100" />
                    <div className="text-center">
                      <p className="text-xl font-bold text-dark-900">{coach.sessions}+</p>
                      <p className="text-xs text-dark-500 mt-1">{t.sessions}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/booking"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary block text-center"
                  >
                    {t.bookNow}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
