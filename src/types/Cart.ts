import { Dish, DishCategory } from '@/types/Menu';
import { OrderDetails } from './Order';

export type CartItem = {
  dishCategory: DishCategory;
  dish: Dish;
  quantity: number;
  totalPrice: number;
};

export type DishCategoryCartItems = {
  items: CartItem[];
  total: number;
};

export type CartState = {
  details: OrderDetails;
  items: CartItem[];
};
