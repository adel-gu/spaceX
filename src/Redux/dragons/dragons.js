// Import from redux RTK
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// API
const API_URL = 'https://api.spacexdata.com/v3/dragons';

// Actions
const FETCH_DRAGONS = 'spaceX/dragons/FETCH_DRAGONS';

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
  extraReducers: (builder) => {
    // Fetch dragons
    builder.addCase(fetchDragons.fulfilled, (state, action) => {
      const newState = state;
      newState.dragons = action.payload;
    });
  },
});

export default dragonsSlice.reducer;
