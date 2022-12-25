import { RootState } from './types';

export const getIsLoading = (state: RootState) => state.app.isLoading;

export const getData = (state: RootState) => state.app.data;
