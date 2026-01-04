import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Meet Coach Omar Mohamed',
      subtitle: 'Founder & Visionary',
      bio: 'Coach Omar Mohamed is a certified professional boxing trainer with over 15 years of experience in the sport. His passion for boxing and belief in its transformative power led him to create zeeprivate - a platform that brings world-class boxing training to everyone, regardless of location or schedule.',
      mission: 'Our mission is simple: make professional boxing training accessible, convenient, and affordable for everyone in Egypt. We believe that boxing is more than just a sport - it\'s a path to confidence, discipline, and physical excellence.',
      stats: [
        { icon: Award, value: '15+', label: 'Years Experience' },
        { icon: Users, value: '50+', label: 'Certified Coaches' },
        { icon: TrendingUp, value: '10K+', label: 'Sessions Completed' },
        { icon: Heart, value: '2K+', label: 'Happy Clients' },
      ],
      credentials: [
        'Certified International Boxing Trainer',
        'Former National Boxing Champion',
        'Sports Science Degree',
        'Fitness & Nutrition Specialist',
      ],
    },
    ar: {
      title: 'تعرف على المدرب عمر محمد',
      subtitle: 'المؤسس والصاحب الرؤية',
      bio: 'المدرب عمر محمد هو مدرب ملاكمة محترف معتمد يتمتع بخبرة تزيد عن 15 عاماً في هذه الرياضة. دفعه شغفه بالملاكمة وإيمانه بقوتها التحويلية إلى إنشاء أوماباكس - منصة تجلب تدريب الملاكمة على مستوى عالمي للجميع، بغض النظر عن الموقع أو الجدول الزمني.',
      mission: 'مهمتنا بسيطة: جعل تدريب الملاكمة الاحترافي متاحاً ومريحاً وبأسعار معقولة للجميع في مصر. نحن نؤمن أن الملاكمة أكثر من مجرد رياضة - إنها طريق إلى الثقة والانضباط والتميز البدني.',
      stats: [
        { icon: Award, value: '+15', label: 'سنة خبرة' },
        { icon: Users, value: '+50', label: 'مدرب معتمد' },
        { icon: TrendingUp, value: '+10 آلاف', label: 'جلسة مكتملة' },
        { icon: Heart, value: '+2 آلاف', label: 'عميل سعيد' },
      ],
      credentials: [
        'مدرب ملاكمة دولي معتمد',
        'بطل ملاكمة وطني سابق',
        'درجة علمية في علوم الرياضة',
        'متخصص في اللياقة البدنية والتغذية',
      ],
    },
  };

  const t = content[language.code];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&h=700&fit=crop"
                alt="Coach Omar Mohamed"
                className="rounded-2xl shadow-2xl"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={32} />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-dark-900">15+</p>
                    <p className="text-sm text-dark-600">
                      {language.code === 'en' ? 'Years Experience' : 'سنة خبرة'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-8 -right-8 w-full h-full border-4 border-primary-200 rounded-2xl -z-0" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-primary-600 font-semibold mb-2">{t.subtitle}</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark-900 mb-6">
                {t.title}
              </h2>
            </div>

            <p className="text-lg text-dark-600 leading-relaxed">{t.bio}</p>

            <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded-r-xl">
              <p className="text-dark-700 leading-relaxed italic">"{t.mission}"</p>
            </div>

            {/* Credentials */}
            <div className="space-y-3">
              {t.credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                  <div className="w-2 h-2 bg-primary-600 rounded-full" />
                  <span className="text-dark-700">{credential}</span>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {t.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-white border border-dark-100 rounded-xl p-4 text-center shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="text-white" size={24} />
                  </div>
                  <p className="text-3xl font-display font-bold text-dark-900 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-dark-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
