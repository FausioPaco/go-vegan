import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
