import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import { INITIAL_STATE } from './defaults';
import { appMiddleware } from './middlewares';

import { appReducer } from './reducers';

const rootReducer = combineReducers({
  app: appReducer,
});
export type AppState = ReturnType<typeof rootReducer>;

const middlewares = [logger, appMiddleware];

const middleWareEnhancer = applyMiddleware(...middlewares);

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  middleWareEnhancer
);
