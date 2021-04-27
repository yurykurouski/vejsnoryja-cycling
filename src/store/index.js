import { createStore, applyMiddleware, compose } from 'redux';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

import reducers from './reducers';

export function configreStore(initialStore) {
  const store = createStore(
    reducers,
    initialStore,
    compose(
      applyMiddleware(...getDefaultMiddleware()),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
}