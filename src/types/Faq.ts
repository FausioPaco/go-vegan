import { IconName } from './Icon';

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

export type FaqCategory = {
  id: keyof Faqs;
  title: string;
  icon: IconName;
};
