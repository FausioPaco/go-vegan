import { FaqCategory, Faqs } from '@/types/Faq';

export const ALL_CATEGORIES: FaqCategory[] = [
  {
    key: 'dishes',
    title: 'Menu & Dishes',
    icon: 'faqs-dishes',
  },
  {
    key: 'orders',
    title: 'Orders and Deliveries',
    icon: 'faqs-orders',
  },
  {
    key: 'flavor',
    title: 'Flavor and Seasonality',
    icon: 'faqs-flavor',
  },
  {
    key: 'origins',
    title: 'Origins of Ingredients',
    icon: 'faqs-origin',
  },
];

export const ALL_QUESTIONS: Faqs = {
  dishes: [
    {
      id: 1,
      question: 'What vegan options are available on the menu?',
      answer:
        'We offer a wide variety of vegan dishes ranging from delightful appetizers to tempting desserts. Our mission is to provide customers with a diverse and flavorful experience, including both traditional dishes and unique creations.',
    },
    {
      id: 2,
      question:
        'Can I customize or adjust dishes to meet my dietary preferences?',
      answer:
        'Absolutely! You can customize most dishes by adding or removing ingredients to suit your dietary preferences. Whether it’s avoiding certain allergens or adjusting flavors, we are happy to accommodate your needs.',
    },
    {
      id: 3,
      question: 'What is the most popular dish on the menu?',
      answer:
        'Our most popular dish is the Chickpea Pasta with Mushrooms, a flavorful combination of protein-rich chickpea pasta and creamy mushroom sauce, perfectly seasoned for a comforting and satisfying meal.',
    },
    {
      id: 4,
      question: 'Are there gluten-free options on the menu?',
      answer:
        'Yes, we offer several gluten-free vegan options, including our Chickpea Pasta with Mushrooms. Gluten-free choices are clearly marked on the menu for your convenience.',
    },
  ],
  orders: [
    {
      id: 1,
      question: 'How do I place an order for delivery?',
      answer:
        'You can place an order through our website and select delivery at checkout.',
    },
    {
      id: 2,
      question: 'What is the estimated delivery time?',
      answer:
        'Delivery typically takes between 30-60 minutes, depending on your location.',
    },
    {
      id: 3,
      question: 'Can I schedule an order for later?',
      answer:
        'Yes, you can schedule an order for a specific date and time during checkout.',
    },
  ],
  flavor: [
    {
      id: 1,
      question: 'How do you achieve such rich flavors in vegan dishes?',
      answer:
        'We use fresh herbs, spices, and innovative cooking techniques to create bold and rich flavors.',
    },
    {
      id: 2,
      question: 'Do your dishes change with the seasons?',
      answer:
        'Yes, our menu evolves with the seasons to feature fresh, seasonal, and locally sourced ingredients.',
    },
    {
      id: 3,
      question: 'Can I request less spice or adjust the seasoning?',
      answer:
        'Of course! Just let us know your preferences when placing your order.',
    },
  ],
  origins: [
    {
      id: 1,
      question: 'Where do you source your ingredients?',
      answer:
        'We partner with local organic farms to source fresh, sustainable, and cruelty-free ingredients.',
    },
    {
      id: 2,
      question: 'Are your ingredients certified organic?',
      answer:
        'Yes, the majority of our ingredients are certified organic and meet strict quality standards.',
    },
    {
      id: 3,
      question: 'Do you use any imported vegan products?',
      answer:
        'While most of our ingredients are local, we occasionally use imported specialty vegan products for unique flavors.',
    },
  ],
} as const;
