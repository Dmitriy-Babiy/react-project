import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk('cartData', async () => {
  const { data } = await axios.get('cart/');
  return data;
});

const initialState = {
  data: [],
  status: 'loading',
  isVisableCart: false,
};

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    ChangeisVisable: (state) => {
      state.isVisableCart = !state.isVisableCart;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchCart.rejected, (state) => {
        state.status = 'error';
      });
  },
});

export const { ChangeisVisable } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
