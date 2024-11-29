import { IconName } from './Icon';

export type FaqCategory = {
  title: string;
  icon: IconName;
};

export type Faq = {
  id: number;
  question: string;
  answer: string;
};

export type Faqs = {
  dishes: Faq[];
  orders: Faq[];
  flavor: Faq[];
  origins: Faq[];
};
