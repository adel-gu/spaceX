import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import dragonsSlice from './dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsSlice.reducer,
  },
});

export default store;
