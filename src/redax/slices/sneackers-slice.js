import axios from '../../axios/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSneackers = createAsyncThunk('sneackersData', async () => {
  const { data } = await axios.get('sneakers/');
  return data;
});

const initialState = {
  data: [],
  status: 'loading',
};

export const sneackersSlice = createSlice({
  name: 'sneackers',
  initialState,
  reducers: {
    // getToSneackers: (state, action) => {
    //   state.toSneackers = action.payload;
    // },
    // getFromSneackers: (state, action) => {
    //   state.fromSneackers = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSneackers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSneackers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = 'loaded';
      })
      .addCase(fetchSneackers.rejected, (state) => {
        state.status = 'error';
      });
  },
});

// export const { getToCurrency, getFromCurrency } = sneackersSlice.actions;
export const sneackersReducer = sneackersSlice.reducer;
