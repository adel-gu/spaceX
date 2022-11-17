import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import dragonsSlice from './dragons/dragons';
import missionsReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsSlice,
    missions: missionsReducer,
  },
});

export default store;
