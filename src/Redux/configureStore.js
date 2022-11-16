import { configureStore } from '@reduxjs/toolkit';

import rocketsReducer from 'Redux/rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
