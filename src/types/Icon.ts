import { ComponentProps } from 'react';

export type IconProps = ComponentProps<'svg'> & {
  name: IconName;
};

export type IconName =
  | 'animals'
  | 'arrow-left'
  | 'arrow-right'
  | 'better-world'
  | 'chevron-down'
  | 'eco-friendly'
  | 'facebook'
  | 'instagram'
  | 'twitter'
  | 'healthcare'
  | 'location'
  | 'user'
  | 'nav-house'
  | 'nav-contact'
  | 'nav-faqs'
  | 'nav-about'
  | 'nav-menu'
  | 'nav-hamburger'
  | 'nav-close'
  | 'faqs-dishes'
  | 'faqs-flavor'
  | 'faqs-orders'
  | 'faqs-origin'
  | 'contact-email'
  | 'contact-location'
  | 'contact-phone'
  | 'checkmark'
  | 'calendar'
  | 'plus'
  | 'close'
  | 'serving-dish'
  | 'pencil'
  | 'clock';
