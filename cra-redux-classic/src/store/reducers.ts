import { INITIAL_STATE } from './defaults';
import { Action } from './types';

export const appReducer = (state = INITIAL_STATE.app, action: Action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return { ...state, isLoading: action.payload };
    case 'DATA':
      return { ...state, data: action.payload };
  }
  return state;
};
