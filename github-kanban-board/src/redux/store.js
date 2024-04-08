// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import repoReducer from './repoSlice';

const store = configureStore({
  reducer: {
    repo: repoReducer,
  },
});

export default store;
