import { Dish } from '@/types/Menu';

export type CartItem = {
  dishCategory: 'rices' | 'pastas' | 'salads' | 'sauces';
  dish: Dish;
  quantity: number;
  totalPrice: number;
};

export type CartState = {
  items: CartItem[];
};
