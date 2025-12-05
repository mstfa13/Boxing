import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Shield, DollarSign, MapPin, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Benefits: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Why Choose OmaBox',
      subtitle: 'Experience the future of personal boxing training',
      benefits: [
        {
          icon: MapPin,
          title: 'Ultimate Convenience',
          description: 'Train at your home, local park, or any preferred location. No commute, no crowds.',
        },
        {
          icon: Trophy,
          title: 'Professional Coaches',
          description: 'All coaches are certified, background-checked, and have years of boxing experience.',
        },
        {
          icon: Clock,
          title: 'Flexible Scheduling',
          description: 'Book sessions that fit your schedule. Early morning, evening, or weekend slots available.',
        },
        {
          icon: DollarSign,
          title: 'Affordable Pricing',
          description: 'Competitive rates with flexible packages. No hidden fees or long-term commitments.',
        },
        {
          icon: Shield,
          title: 'Safe & Verified',
          description: 'Every coach undergoes strict verification. Your safety and satisfaction guaranteed.',
        },
        {
          icon: Users,
          title: 'Personalized Training',
          description: 'One-on-one attention tailored to your fitness level and boxing goals.',
        },
      ],
    },
    ar: {
      title: 'لماذا تختار أوماباكس',
      subtitle: 'اختبر مستقبل التدريب الشخصي في الملاكمة',
      benefits: [
        {
          icon: MapPin,
          title: 'راحة مطلقة',
          description: 'تدرب في منزلك أو الحديقة المحلية أو أي موقع مفضل. لا توجد تنقلات، لا ازدحام.',
        },
        {
          icon: Trophy,
          title: 'مدربون محترفون',
          description: 'جميع المدربين معتمدون ومفحوصون ولديهم سنوات من الخبرة في الملاكمة.',
        },
        {
          icon: Clock,
          title: 'جدولة مرنة',
          description: 'احجز جلسات تناسب جدولك. فترات صباحية مبكرة أو مسائية أو نهاية الأسبوع متاحة.',
        },
        {
          icon: DollarSign,
          title: 'أسعار معقولة',
          description: 'أسعار تنافسية مع باقات مرنة. لا توجد رسوم مخفية أو التزامات طويلة الأجل.',
        },
        {
          icon: Shield,
          title: 'آمن ومُتحقق منه',
          description: 'كل مدرب يخضع لتحقق صارم. سلامتك ورضاك مضمونان.',
        },
        {
          icon: Users,
          title: 'تدريب شخصي',
          description: 'اهتمام فردي مصمم خصيصاً لمستوى لياقتك وأهدافك في الملاكمة.',
        },
      ],
    },
  };

  const t = content[language.code];

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 bg-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="bg-dark-50 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="text-white" size={32} />
                </motion.div>
                
                <h3 className="text-2xl font-display font-bold text-dark-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
