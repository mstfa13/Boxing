import React from 'react';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const isArabic = language.code === 'ar';

  const content = {
    en: {
      tagline: 'Professional Boxing Training at Your Doorstep',
      quickLinks: 'Quick Links',
      support: 'Support',
      contact: 'Contact Us',
      followUs: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe to get updates on new coaches and exclusive offers',
      emailPlaceholder: 'Enter your email',
      subscribe: 'Subscribe',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Our Coaches', href: '#coaches' },
        { label: 'Pricing', href: '#pricing' },
      ],
      supportLinks: [
        { label: 'FAQ', href: '#faq' },
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Cancellation Policy', href: '#cancellation' },
      ],
      paymentMethods: 'Accepted Payment Methods',
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      by: 'by Coach Omar Mohamed',
      address: 'Cairo, Egypt',
      phone: '+20 123 456 7890',
      email: 'info@omabox.com',
    },
    ar: {
      tagline: 'تدريب الملاكمة الاحترافي على عتبة بابك',
      quickLinks: 'روابط سريعة',
      support: 'الدعم',
      contact: 'اتصل بنا',
      followUs: 'تابعنا',
      newsletter: 'النشرة الإخبارية',
      newsletterText: 'اشترك للحصول على تحديثات حول المدربين الجدد والعروض الحصرية',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      subscribe: 'اشترك',
      links: [
        { label: 'الرئيسية', href: '#home' },
        { label: 'كيف يعمل', href: '#how-it-works' },
        { label: 'مدربونا', href: '#coaches' },
        { label: 'الأسعار', href: '#pricing' },
      ],
      supportLinks: [
        { label: 'الأسئلة الشائعة', href: '#faq' },
        { label: 'شروط الخدمة', href: '#terms' },
        { label: 'سياسة الخصوصية', href: '#privacy' },
        { label: 'سياسة الإلغاء', href: '#cancellation' },
      ],
      paymentMethods: 'طرق الدفع المقبولة',
      rights: 'جميع الحقوق محفوظة.',
      madeWith: 'صنع بـ',
      by: 'بواسطة المدرب عمر محمد',
      address: 'القاهرة، مصر',
      phone: '+20 123 456 7890',
      email: 'info@omabox.com',
    },
  };

  const t = content[language.code];

  return (
    <footer className="gradient-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-2xl">O</span>
              </div>
              <span className="text-2xl font-display font-bold">
                Oma<span className="text-primary-500">Box</span>
              </span>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed">{t.tagline}</p>
            
            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <a href="tel:+201234567890" className="flex items-center space-x-2 rtl:space-x-reverse text-dark-300 hover:text-white transition-colors text-sm">
                <Phone size={16} />
                <span>{t.phone}</span>
              </a>
              <a href="mailto:info@omabox.com" className="flex items-center space-x-2 rtl:space-x-reverse text-dark-300 hover:text-white transition-colors text-sm">
                <Mail size={16} />
                <span>{t.email}</span>
              </a>
              <div className="flex items-center space-x-2 rtl:space-x-reverse text-dark-300 text-sm">
                <MapPin size={16} />
                <span>{t.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {t.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t.support}</h3>
            <ul className="space-y-2">
              {t.supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">{t.newsletter}</h3>
            <p className="text-dark-300 text-sm mb-4">{t.newsletterText}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full px-4 py-2 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                aria-label="Email address"
              />
              <motion.button
                type="submit"
                className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.subscribe}
              </motion.button>
            </form>
          </div>
        </div>

        {/* Social Media & Payment Methods */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Media */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-center md:text-left">{t.followUs}</h4>
              <div className="flex items-center space-x-4 rtl:space-x-reverse">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </motion.a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-center md:text-right">{t.paymentMethods}</h4>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <div className="px-3 py-1.5 bg-dark-800 rounded text-xs font-semibold">Paymob</div>
                <div className="px-3 py-1.5 bg-dark-800 rounded text-xs font-semibold">Vodafone Cash</div>
                <div className="px-3 py-1.5 bg-dark-800 rounded text-xs font-semibold">InstaPay</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dark-400">
            <p>
              © {new Date().getFullYear()} OmaBox. {t.rights}
            </p>
            <p className="flex items-center space-x-1 rtl:space-x-reverse">
              <span>{t.madeWith}</span>
              <Heart size={14} className="text-primary-500 fill-current" />
              <span>{t.by}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
