// Redux
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

// Slices
import dragonsSlice from './dragons/dragonsSlice';

// Combine slices reducer
const rootReducer = {
  reducer: {
    // here goes the slices...
  },
};

// Configure Store
const Store = configureStore(rootReducer, applyMiddleware(thunk));

export default Store;
