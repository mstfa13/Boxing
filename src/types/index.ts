export interface Coach {
  id: number;
  name: string;
  nameAr: string;
  photo: string;
  specialty: string;
  specialtyAr: string;
  rating: number;
  experience: number;
  sessions: number;
  bio: string;
  bioAr: string;
  certified: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  nameAr: string;
  photo: string;
  rating: number;
  text: string;
  textAr: string;
  location: string;
  locationAr: string;
  date: string;
}

export interface PricingPlan {
  id: number;
  name: string;
  nameAr: string;
  sessions: number;
  price: number;
  pricePerSession: number;
  features: string[];
  featuresAr: string[];
  popular?: boolean;
  savings?: string;
  savingsAr?: string;
}

export interface FAQ {
  id: number;
  question: string;
  questionAr: string;
  answer: string;
  answerAr: string;
}

export interface Language {
  code: 'en' | 'ar';
  name: string;
  dir: 'ltr' | 'rtl';
}
