import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@store/reducers/cartReducer';
import userReducer from '@store/reducers/userReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
