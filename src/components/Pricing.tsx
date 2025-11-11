import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { pricingPlans } from '../data';

const Pricing: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Flexible Pricing Plans',
      subtitle: 'Choose the package that fits your boxing journey',
      currency: 'EGP',
      perSession: 'per session',
      mostPopular: 'Most Popular',
      selectPlan: 'Select Plan',
    },
    ar: {
      title: 'خطط تسعير مرنة',
      subtitle: 'اختر الباقة التي تناسب رحلتك في الملاكمة',
      currency: 'جنيه',
      perSession: 'لكل جلسة',
      mostPopular: 'الأكثر شعبية',
      selectPlan: 'اختر الباقة',
    },
  };

  const t = content[language.code];
  const isArabic = language.code === 'ar';

  return (
    <section id="pricing" className="py-20 bg-dark-50">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-primary text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center space-x-1 rtl:space-x-reverse shadow-lg">
                    <Sparkles size={16} />
                    <span>{t.mostPopular}</span>
                  </div>
                </div>
              )}

              <div
                className={`bg-white rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'ring-2 ring-primary-500 shadow-2xl transform scale-105'
                    : 'shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-display font-bold text-dark-900 mb-2">
                    {isArabic ? plan.nameAr : plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center space-x-1 rtl:space-x-reverse">
                    <span className="text-5xl font-display font-bold text-primary-600">
                      {plan.price.toLocaleString()}
                    </span>
                    <span className="text-dark-500 text-sm">{t.currency}</span>
                  </div>
                  {plan.sessions > 1 && (
                    <p className="text-sm text-dark-500 mt-2">
                      {plan.pricePerSession.toLocaleString()} {t.currency} {t.perSession}
                    </p>
                  )}
                  {plan.savings && (
                    <div className="mt-2 inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {isArabic ? plan.savingsAr : plan.savings}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {(isArabic ? plan.featuresAr : plan.features).map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3 rtl:space-x-reverse">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check size={14} className="text-primary-600" />
                      </div>
                      <span className="text-dark-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="/booking"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors block text-center ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-dark-900 text-white hover:bg-dark-800'
                  }`}
                >
                  {t.selectPlan}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
