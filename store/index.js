import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../src/reducers';

export default function configureStore(initialState) {
  const middleware = process.env.NODE_ENV !== 'production' ? [logger] : null;
  return createStore(rootReducer, initialState, applyMiddleware(...middleware));
}
