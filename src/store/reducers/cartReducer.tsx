import { CartState } from '@/types/Cart';
import { Dish, Dishes } from '@/types/Menu';
import { OrderDetails } from '@/types/Order';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialCartState: CartState = {
  items: [],
  details: {
    location: '',
    date: new Date().toISOString(),
    time: new Date().toISOString(),
    numberOfPeople: 5,
  },
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    setDetails(state, action: PayloadAction<OrderDetails>) {
      state.details = action.payload;
    },

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

      if (existingItemIndex === -1) {
        state.items.push({
          dishCategory: currentCategory,
          dish: currentDish,
          quantity: totalQuantity,
          totalPrice: (totalQuantity * currentDish.price) / currentDish.perUnit,
        });
      } else {
        state.items[existingItemIndex].quantity = totalQuantity;
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

export const { setDetails, addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
