import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, Phone, User, ArrowLeft, CheckCircle, Smartphone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const NotifyMe: React.FC = () => {
  const { language } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const content = {
    en: {
      title: 'Get Notified When Our App Launches',
      subtitle: 'Be the first to know when the zeeprivate mobile app is available',
      nameLabel: 'Your Name',
      namePlaceholder: 'Enter your name',
      emailLabel: 'Email Address',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'Phone Number',
      phonePlaceholder: '+20 xxx xxx xxxx',
      submit: 'Notify Me',
      back: 'Back to Home',
      successTitle: 'You\'re on the list!',
      successMessage: 'We\'ll notify you as soon as our mobile app is ready. Get ready for professional boxing training on the go!',
      features: [
        'Book coaches instantly from your phone',
        'Real-time coach tracking',
        'In-app messaging with your trainer',
        'Exclusive mobile-only discounts',
      ],
    },
    ar: {
      title: 'احصل على إشعار عند إطلاق تطبيقنا',
      subtitle: 'كن أول من يعرف عندما يكون تطبيق zeeprivate متاحاً',
      nameLabel: 'اسمك',
      namePlaceholder: 'أدخل اسمك',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'you@example.com',
      phoneLabel: 'رقم الهاتف',
      phonePlaceholder: '+20 xxx xxx xxxx',
      submit: 'أبلغني',
      back: 'العودة للرئيسية',
      successTitle: 'أنت في القائمة!',
      successMessage: 'سنبلغك فور جاهزية تطبيقنا. استعد لتدريب الملاكمة الاحترافي أثناء التنقل!',
      features: [
        'احجز المدربين فوراً من هاتفك',
        'تتبع المدرب في الوقت الحقيقي',
        'المراسلة داخل التطبيق مع مدربك',
        'خصومات حصرية للجوال فقط',
      ],
    },
  };

  const t = content[language.code];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, send to backend/email service
    console.log('Notify me submission:', formData);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle size={48} className="text-white" />
          </motion.div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">{t.successTitle}</h2>
          <p className="text-dark-300 mb-8">{t.successMessage}</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t.back}</span>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-12 px-4 flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Back Link */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-dark-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center">
                <Smartphone size={28} className="text-white" />
              </div>
              <Bell size={24} className="text-primary-400" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              {t.title}
            </h1>
            <p className="text-dark-300 text-lg mb-8">{t.subtitle}</p>

            {/* Features */}
            <div className="space-y-4">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle size={20} className="text-primary-500" />
                  <span className="text-dark-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-dark-200 text-sm font-medium mb-2">
                    {t.nameLabel}
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.namePlaceholder}
                      className="w-full bg-dark-800/50 border border-dark-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-dark-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-dark-200 text-sm font-medium mb-2">
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full bg-dark-800/50 border border-dark-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-dark-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-dark-200 text-sm font-medium mb-2">
                    {t.phoneLabel}
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.phonePlaceholder}
                      className="w-full bg-dark-800/50 border border-dark-600 rounded-xl py-3 pl-12 pr-4 text-white placeholder-dark-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors mt-6"
                >
                  <Bell size={20} />
                  <span>{t.submit}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NotifyMe;
