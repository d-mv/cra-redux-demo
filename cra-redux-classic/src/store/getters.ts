import { State } from './types';

export const getIsLoading = (state: State) => state.app.isLoading;

export const getData = (state: State) => state.app.data;