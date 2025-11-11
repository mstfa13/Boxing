import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const AppDownload: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Train Smarter with Our Mobile App',
      subtitle: 'Book sessions, track progress, and manage your boxing journey on the go',
      features: [
        'Easy booking & scheduling',
        'Real-time coach tracking',
        'Progress & performance metrics',
        'Secure payment integration',
        'Session history & receipts',
        'Push notifications',
      ],
      downloadOn: 'Download on the',
      appStore: 'App Store',
      googlePlay: 'Google Play',
    },
    ar: {
      title: 'تدرب بشكل أذكى مع تطبيقنا للهاتف المحمول',
      subtitle: 'احجز الجلسات وتتبع التقدم وإدارة رحلتك في الملاكمة أثناء التنقل',
      features: [
        'حجز وجدولة سهلة',
        'تتبع المدرب في الوقت الفعلي',
        'مقاييس التقدم والأداء',
        'تكامل الدفع الآمن',
        'سجل الجلسات والإيصالات',
        'إشعارات فورية',
      ],
      downloadOn: 'حمل على',
      appStore: 'App Store',
      googlePlay: 'Google Play',
    },
  };

  const t = content[language.code];

  return (
    <section className="py-20 gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {t.title}
              </h2>
              <p className="text-xl text-white/90">{t.subtitle}</p>
            </div>

            {/* Features List */}
            <ul className="space-y-3">
              {t.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 rtl:space-x-reverse bg-white text-dark-900 px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <Download size={24} />
                <div className="text-left rtl:text-right">
                  <p className="text-xs opacity-75">{t.downloadOn}</p>
                  <p className="font-bold">{t.appStore}</p>
                </div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 rtl:space-x-reverse bg-white text-dark-900 px-6 py-3 rounded-xl shadow-xl hover:shadow-2xl transition-all"
              >
                <Download size={24} />
                <div className="text-left rtl:text-right">
                  <p className="text-xs opacity-75">{t.downloadOn}</p>
                  <p className="font-bold">{t.googlePlay}</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto w-80">
              {/* Phone Frame */}
              <div className="relative z-10 bg-dark-900 rounded-[3rem] p-4 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  <div className="aspect-[9/19] bg-gradient-to-br from-primary-50 to-white flex items-center justify-center">
                    <Smartphone size={120} className="text-primary-200" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-8 -right-8 bg-white/20 backdrop-blur-sm rounded-2xl p-4 shadow-xl"
              >
                <Download size={32} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
