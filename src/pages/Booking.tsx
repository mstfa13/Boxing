import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, MapPin, Calendar, Clock, CreditCard, Wallet, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Booking: React.FC = () => {
  const { language } = useLanguage();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'single',
    specialRequests: '',
  });

  const content = {
    en: {
      title: 'Book Your Training Session',
      subtitle: 'Fill in your details and choose your payment method',
      step1: 'Personal Information',
      step2: 'Session Details',
      step3: 'Payment',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      address: 'Home Address',
      city: 'City',
      preferredDate: 'Preferred Date',
      preferredTime: 'Preferred Time',
      sessionType: 'Session Package',
      specialRequests: 'Special Requests (Optional)',
      single: 'Single Session - 1,500 EGP',
      pack5: '8 Sessions Pack - 10,000 EGP',
      pack10: '10 Sessions Pack - 15,000 EGP',
      pack20: 'VIP Monthly - 20,000 EGP',
      next: 'Next Step',
      back: 'Back',
      paymentMethod: 'Choose Payment Method',
      visaCard: 'Visa/Mastercard',
      vodafoneCash: 'Vodafone Cash',
      processing: 'Processing Payment...',
      confirmPay: 'Confirm & Pay',
    },
    ar: {
      title: 'احجز جلستك التدريبية',
      subtitle: 'املأ بياناتك واختر طريقة الدفع',
      step1: 'المعلومات الشخصية',
      step2: 'تفاصيل الجلسة',
      step3: 'الدفع',
      fullName: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      address: 'عنوان المنزل',
      city: 'المدينة',
      preferredDate: 'التاريخ المفضل',
      preferredTime: 'الوقت المفضل',
      sessionType: 'نوع الباقة',
      specialRequests: 'طلبات خاصة (اختياري)',
      single: 'جلسة واحدة - 1,500 جنيه',
      pack5: 'باقة 8 جلسات - 10,000 جنيه',
      pack10: 'باقة 10 جلسات - 15,000 جنيه',
      pack20: 'VIP شهري - 20,000 جنيه',
      next: 'التالي',
      back: 'رجوع',
      paymentMethod: 'اختر طريقة الدفع',
      visaCard: 'فيزا/ماستركارد',
      vodafoneCash: 'فودافون كاش',
      processing: 'جاري معالجة الدفع...',
      confirmPay: 'تأكيد والدفع',
    },
  };

  const t = content[language.code];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePayment = (method: 'card' | 'vodafone') => {
    // This will integrate with Paymob API
    console.log('Processing payment with:', method);
    console.log('Form data:', formData);
    
    // TODO: Implement Paymob integration
    // For now, we'll simulate the payment process
    alert(`Payment via ${method} will be processed through Paymob`);
  };

  const sessionPrices: { [key: string]: number } = {
    single: 350,
    pack5: 1500,
    pack10: 2800,
    pack20: 5200,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 pt-20">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <a
            href="/"
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-primary-400 hover:text-primary-300 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </a>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t.title}
          </h1>
          <p className="text-dark-200 text-lg">{t.subtitle}</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-4 rtl:space-x-reverse">
            {[1, 2, 3].map((s) => (
              <React.Fragment key={s}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all ${
                      step >= s
                        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50'
                        : 'bg-dark-700 text-dark-400'
                    }`}
                  >
                    {step > s ? <Check size={20} /> : s}
                  </div>
                  <p className={`mt-2 text-sm ${step >= s ? 'text-white' : 'text-dark-400'}`}>
                    {s === 1 ? t.step1 : s === 2 ? t.step2 : t.step3}
                  </p>
                </div>
                {s < 3 && (
                  <div
                    className={`w-20 h-1 ${
                      step > s ? 'bg-primary-600' : 'bg-dark-700'
                    } transition-colors`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-primary-500/20 shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <User size={18} className="inline mr-2" />
                        {t.fullName}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Mail size={18} className="inline mr-2" />
                        {t.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Phone size={18} className="inline mr-2" />
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <MapPin size={18} className="inline mr-2" />
                        {t.city}
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <MapPin size={18} className="inline mr-2" />
                      {t.address}
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Session Details */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Calendar size={18} className="inline mr-2" />
                        {t.preferredDate}
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <Clock size={18} className="inline mr-2" />
                        {t.preferredTime}
                      </label>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white focus:outline-none focus:border-primary-500 transition-colors"
                        required
                      >
                        <option value="">Select time</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="18:00">06:00 PM</option>
                        <option value="20:00">08:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-3">
                      {t.sessionType}
                    </label>
                    <div className="grid gap-4">
                      {['single', 'pack5', 'pack10', 'pack20'].map((type) => (
                        <label
                          key={type}
                          className={`flex items-center justify-between p-4 bg-dark-700 border-2 rounded-xl cursor-pointer transition-all ${
                            formData.sessionType === type
                              ? 'border-primary-500 bg-primary-500/10'
                              : 'border-dark-600 hover:border-primary-500/50'
                          }`}
                        >
                          <div className="flex items-center">
                            <input
                              type="radio"
                              name="sessionType"
                              value={type}
                              checked={formData.sessionType === type}
                              onChange={handleInputChange}
                              className="mr-3"
                            />
                            <span className="text-white font-medium">
                              {t[type as keyof typeof t]}
                            </span>
                          </div>
                          {formData.sessionType === type && (
                            <Check size={20} className="text-primary-500" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      {t.specialRequests}
                    </label>
                    <textarea
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  {/* Order Summary */}
                  <div className="bg-dark-700/50 rounded-2xl p-6 border border-primary-500/20">
                    <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between text-dark-200">
                        <span>Package:</span>
                        <span className="text-white font-medium">
                          {t[formData.sessionType as keyof typeof t]}
                        </span>
                      </div>
                      <div className="flex justify-between text-dark-200">
                        <span>Date:</span>
                        <span className="text-white font-medium">{formData.preferredDate}</span>
                      </div>
                      <div className="flex justify-between text-dark-200">
                        <span>Time:</span>
                        <span className="text-white font-medium">{formData.preferredTime}</span>
                      </div>
                      <div className="pt-3 border-t border-dark-600 flex justify-between text-xl font-bold">
                        <span className="text-white">Total:</span>
                        <span className="text-primary-500">
                          {sessionPrices[formData.sessionType]} EGP
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Payment Methods */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">{t.paymentMethod}</h3>
                    <div className="grid gap-4">
                      {/* Visa/Mastercard */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePayment('card')}
                        className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600/20 to-blue-700/20 border-2 border-blue-500/30 hover:border-blue-500 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                            <CreditCard size={28} className="text-blue-400" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-bold text-lg">{t.visaCard}</p>
                            <p className="text-dark-300 text-sm">Secure payment via Paymob</p>
                          </div>
                        </div>
                        <div className="text-blue-400 font-bold">→</div>
                      </motion.button>

                      {/* Vodafone Cash */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handlePayment('vodafone')}
                        className="flex items-center justify-between p-6 bg-gradient-to-r from-red-600/20 to-red-700/20 border-2 border-red-500/30 hover:border-red-500 rounded-2xl transition-all group"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors">
                            <Wallet size={28} className="text-red-400" />
                          </div>
                          <div className="text-left">
                            <p className="text-white font-bold text-lg">{t.vodafoneCash}</p>
                            <p className="text-dark-300 text-sm">Pay with your mobile wallet</p>
                          </div>
                        </div>
                        <div className="text-red-400 font-bold">→</div>
                      </motion.button>
                    </div>
                  </div>

                  <div className="bg-dark-700/30 rounded-xl p-4 border border-dark-600">
                    <p className="text-dark-300 text-sm text-center">
                      🔒 Your payment is secure and encrypted. Powered by Paymob.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="bg-dark-800/80 border-t border-dark-700 px-8 py-6 flex justify-between">
              {step > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrevStep}
                  className="px-6 py-3 bg-dark-700 hover:bg-dark-600 text-white rounded-xl font-medium transition-colors"
                >
                  {t.back}
                </motion.button>
              )}
              {step < 3 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNextStep}
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium transition-colors ml-auto"
                >
                  {t.next}
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;
