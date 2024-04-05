// redux/store.ts

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import repoReducer from './repoSlice.ts';

export const store = configureStore({
  reducer: {
    repo: repoReducer,
    // Add other reducers if needed
  },
  // Add middleware, enhancers, and other configuration here if needed
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
