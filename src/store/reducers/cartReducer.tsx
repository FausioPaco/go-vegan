import { CartState } from '@/types/Cart';
import { Dish, Dishes } from '@/types/Menu';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialCartState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(
      state,
      action: PayloadAction<{
        category: keyof Dishes;
        dish: Dish;
        quantity: number;
      }>,
    ) {
      const currentDish = action.payload.dish;
      const totalQuantity = action.payload.quantity;
      const currentCategory = action.payload.category;

      const existingItemIndex = state.items.findIndex(
        (e) => e.dish.id === currentDish.id,
      );

      if (existingItemIndex > -1) {
        state.items.push({
          dishCategory: currentCategory,
          dish: currentDish,
          totalPrice: (totalQuantity * currentDish.price) / currentDish.perUnit,
        });
      } else {
        state.items[existingItemIndex].totalPrice =
          (totalQuantity * currentDish.price) / currentDish.perUnit;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((s) => s.dish.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
