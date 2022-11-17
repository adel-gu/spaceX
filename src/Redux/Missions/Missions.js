import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const FETCH_MISSIONS = 'store/rockets/FETCH_MISSIONS';

const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const missions = await response.json();
  return missions;
});

const missionSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload;
        return newState;
      })
      .addDefaultCase((state) => state);
  },
});

const missionsReducer = missionSlice.reducer;
export default missionsReducer;
export { fetchMissions };
