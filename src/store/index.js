import { createStore } from 'redux';
import reducers from './reducers';

export function configreStore(initialStore) {
  const store = createStore(reducers, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
}