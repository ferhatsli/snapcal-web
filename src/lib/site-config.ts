export type PricingPlan = {
  id: 'weekly_9_99' | 'yearly_39_99';
  label: string;
  priceText: string;
  description: string;
  featured?: boolean;
  features: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const SITE_CONFIG = {
  name: 'SnapCal',
  tagline: 'Calorie tracking made easy',
  description: 'Snap your meal, get accurate calorie insights, and stay consistent with your daily goals.',
  appStoreUrl: 'https://apps.apple.com/app/id6761634811',
  supportEmail: 'support@snapcal.app',
} as const;

export const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
] as const;

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'weekly_9_99',
    label: 'Weekly Plan',
    priceText: '$9.99 / week',
    description: 'Start fast with full premium access and flexible cancellation.',
    features: [
      'AI meal scan and calorie analysis',
      'Macro tracking and daily goals',
      'Progress insights and reminders',
    ],
  },
  {
    id: 'yearly_39_99',
    label: 'Yearly Plan',
    priceText: '$39.99 / year',
    description: 'Best value for long-term consistency and measurable progress.',
    featured: true,
    features: [
      'Everything in Weekly Plan',
      'Year-round premium access',
      'Lower effective monthly cost',
    ],
  },
];

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
    question: 'Is there a free trial?',
    answer:
      'No. SnapCal currently uses a paid subscription model and does not offer a free trial.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer:
      'You can cancel anytime from your Apple subscription settings. Access remains active until the current billing period ends.',
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
];
