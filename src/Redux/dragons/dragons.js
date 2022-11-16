// Import from redux RTK
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const API_URL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const FETCH_DRAGONS = 'spaceX/dragons/FETCH_DRAGONS';
// const BOOK_DRAGON = 'spaceX/dragons/BOOK_DRAGON';

// Thunk action creatore
export const fetchDragons = createAsyncThunk(FETCH_DRAGONS, async () => {
  // fetch the data
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
});

// Create the dragons slice
const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: [],
  reducers: {
    reserveDragon: (state, action) => {
      const newState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: true };
        }
        return dragon;
      });
      return newState;
    },
    cancelReserveDragon: (state, action) => {
      const newState = state.map((dragon) => {
        if (dragon.id === action.payload) {
          return { ...dragon, reserved: false };
        }
        return dragon;
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    // Fetch dragons
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = action.payload.map((dragon) => ({
        ...dragon,
        reserved: false,
      }));

      return newState;
    });
  },
});

export const { reserveDragon, cancelReserveDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
