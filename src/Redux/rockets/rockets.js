import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_ROCKETS = 'store/rockets/FETCH_ROCKETS';

const fetchRockets = createAsyncThunk(FETCH_ROCKETS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await response.json();
  return rockets;
});

const rocketSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    rocketBooking: (state, action) => {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload) return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload.map((rocket) => ({
          ...rocket,
          reserved: false,
        }));
        return newState;
      })
      .addDefaultCase((state) => state);
  },
});

const rocketsReducer = rocketSlice.reducer;
export default rocketsReducer;
export { fetchRockets };
export const { rocketBooking } = rocketSlice.actions;
