import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { appMiddleware } from './middlewares';

import { appReducer } from './reducers';

const logger = createLogger({
  collapsed: true,
  duration: true,
  timestamp: true,
});

const reducer = {
  app: appReducer,
};

const middleware = (fn: any) => fn().concat(logger, appMiddleware);

export const store = configureStore({ reducer, middleware });

type RootState = ReturnType<typeof store.getState>;

export type { RootState };
