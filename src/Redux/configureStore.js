import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import dragonsSlice from './dragons/dragons';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  dragons: dragonsSlice,
});

const store = configureStore({ reducer: rootReducer });

export default store;
