import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsReducer from './rockets/rockets';
import dragonsSlice from './dragons/dragons';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  dragons: dragonsSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
