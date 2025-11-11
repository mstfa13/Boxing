import React from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'How It Works',
      subtitle: 'Get started in 3 simple steps',
      steps: [
        {
          icon: Search,
          title: 'Choose Your Coach',
          description: 'Browse our roster of certified professional boxing coaches. Filter by specialty, experience, and location.',
        },
        {
          icon: Calendar,
          title: 'Book a Session',
          description: 'Select your preferred time slot and package. Flexible scheduling to fit your lifestyle.',
        },
        {
          icon: MapPin,
          title: 'Train at Your Location',
          description: 'Your coach comes to your home, gym, or preferred training spot. Start your boxing journey!',
        },
      ],
    },
    ar: {
      title: 'كيف يعمل',
      subtitle: 'ابدأ في 3 خطوات بسيطة',
      steps: [
        {
          icon: Search,
          title: 'اختر مدربك',
          description: 'تصفح قائمة مدربي الملاكمة المحترفين المعتمدين. قم بالتصفية حسب التخصص والخبرة والموقع.',
        },
        {
          icon: Calendar,
          title: 'احجز جلسة',
          description: 'اختر الوقت المفضل لديك والباقة. جدولة مرنة لتناسب نمط حياتك.',
        },
        {
          icon: MapPin,
          title: 'تدرب في موقعك',
          description: 'يأتي مدربك إلى منزلك أو صالة الألعاب الرياضية أو مكان التدريب المفضل لديك. ابدأ رحلة الملاكمة الخاصة بك!',
        },
      ],
    },
  };

  const t = content[language.code];

  return (
    <section id="how-it-works" className="py-20 bg-dark-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">{t.title}</h2>
          <p className="section-subheading">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent -translate-y-1/2 -z-0" />

          {t.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow h-full relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-display font-bold text-xl">{index + 1}</span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6"
                >
                  <step.icon className="text-primary-600" size={32} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
