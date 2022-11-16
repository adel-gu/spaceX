import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from 'Redux/rockets/rockets';
import dragonsSlice from 'Redux/dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    dragons: dragonsSlice,
  },
});

export default store;
