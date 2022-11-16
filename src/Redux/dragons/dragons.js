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
  initialState: {
    dragons: [],
  },
  reducers: {
    reserveDragon: (state, action) => {
      const newState = state.dragons.map((dragon) =>
        dragon.id === action.payload ? { ...dragon, reserved: true } : dragon
      );
      state.dragons = newState;
    },
  },
  extraReducers: (builder) => {
    // Fetch dragons
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      state.dragons = action.payload.map((dragon) => {
        return { ...dragon, reserved: false };
      });
    });
  },
});

export const { reserveDragon } = dragonsSlice.actions;
export default dragonsSlice.reducer;
