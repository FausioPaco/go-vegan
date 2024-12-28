import { CartItem, DishCategoryCartItems } from '@/types/Cart';
import { DishCategory } from '@/types/Menu';

export const groupCartItemsByCategory = (cartItems: CartItem[]) => {
  return cartItems.reduce<Record<DishCategory, DishCategoryCartItems>>(
    (cart, item) => {
      const { dishCategory, totalPrice } = item;

      if (!cart[dishCategory]) {
        cart[dishCategory] = {
          items: [],
          total: 0,
        };
      }

      cart[dishCategory].items.push(item);
      cart[dishCategory].total += totalPrice;

      return cart;
    },
    {} as Record<DishCategory, DishCategoryCartItems>,
  );
};

export const getDishImagePath = (category: string, url: string) =>
  `/menu/${category}/${url}`;
