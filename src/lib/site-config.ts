export type FaqItem = {
  question: string;
  answer: string;
};

export const SITE_CONFIG = {
  name: 'SnapCal',
  tagline: 'Calorie tracking made easy',
  description: 'Snap your meal, get accurate calorie insights, and stay consistent with your daily goals.',
  appStoreUrl: 'https://apps.apple.com/app/id6761634811',
  supportEmail: 'support@snapcalai.app',
} as const;

export const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How does SnapCal work?',
    answer:
      'You snap a meal photo and SnapCal estimates calories and macros in seconds, then helps you track progress day by day.',
  },
  {
    question: 'How accurate is AI calorie estimation?',
    answer:
      'Accuracy varies by photo quality and meal complexity. SnapCal is designed for practical consistency and lets you edit entries any time.',
  },
  {
    question: 'Does SnapCal support Apple Health?',
    answer:
      'Yes. You can connect Apple Health to sync activity and calorie burn data for a more personalized experience.',
  },
  {
    question: 'Which devices are supported?',
    answer:
      'SnapCal is iOS-first. The mobile app and website are optimized for modern iPhone and desktop browsers.',
  },
  {
    question: 'How is my data protected?',
    answer:
      'We use industry-standard safeguards, encrypted transport, and limited access controls to protect personal data.',
  },
  {
    question: 'Can I use SnapCal offline?',
    answer:
      'Some previously loaded content may remain visible offline, but AI analysis and syncing require an internet connection.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can reach us directly at support@snapcalai.app for product questions, account issues, or feedback.',
  },
];
