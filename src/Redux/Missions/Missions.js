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
  reducers: {
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    },
    leavingMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        let newState = state;
        newState = action.payload.map((mission) => ({
          ...mission,
          reserved: false,
        }));
        return newState;
      })
      .addDefaultCase((state) => state);
  },
});

const missionsReducer = missionSlice.reducer;
export default missionsReducer;
export { fetchMissions };
export const { joinMission, leavingMission } = missionSlice.actions;
