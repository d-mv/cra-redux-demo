import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit';
import { RootState } from './types';

export const appMiddleware =
  (store: MiddlewareAPI<Dispatch, RootState>) =>
  (next: any) =>
  (action: any): void => {
    next(action);
  // eslint-disable-next-line no-console
  console.log(store.getState())
  };
