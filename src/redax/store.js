import { configureStore } from '@reduxjs/toolkit';
import { sneackersReducer } from './slices/sneackers-slice';
import { cartReducer } from './slices/cart-slice';


const store = configureStore({
  reducer: {
    sneackers: sneackersReducer,
    cart: cartReducer,
  },
});

export default store;
