export interface NavMenuItem {
  label: string;
  path: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  bulletPointsTitle?: string;
  bulletPoints: string[];
  subSection?: {
    title: string;
    description: string[];
  };
  iconName: string;
  imageUrl: string;
  tag: string;
  isSpecial?: boolean;
}

export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string[];
  featuresTitle?: string;
  features: string[];
  specialNote?: {
    title: string;
    content: string[];
  };
  imageUrl: string;
  badge?: string;
}

export interface LightboxImageState {
  isOpen: boolean;
  src: string;
  alt: string;
  caption?: string;
}

export type PolicyModalType = 'privacy' | 'cookies' | null;

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  practiceArea?: string;
}
