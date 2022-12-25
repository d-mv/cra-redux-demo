import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './defaults';
import { Action, AppState } from './types';

export const slice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setIsLoading: (state: AppState, action: Action<boolean>) => {
      state.isLoading = action.payload;
    },
    setData: (state: AppState, action: Action<string[]>) => {
      state.data = [...state.data, ...action.payload];
    },
  },
});

export const { setIsLoading, setData } = slice.actions;

export const appReducer = slice.reducer;
