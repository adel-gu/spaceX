// Redux
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Slices
import dragonsSlice from './dragons/dragons';

// Combine slices reducer
const rootReducer = {
  reducer: {
    dragons: dragonsSlice.reducer,
  },
};

// Configure Store
const Store = configureStore(rootReducer, applyMiddleware(thunk));

export default Store;
