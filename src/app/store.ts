import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { backendApi, locationsApi } from './api';

export const store = configureStore({
  reducer: {
    [backendApi.reducerPath]: locationsApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
