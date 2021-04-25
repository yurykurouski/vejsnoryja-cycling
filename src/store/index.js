import { createStore } from 'redux';
import reducers from './reducers';

export function configreStore(initialStore) {
  const store = createStore(reducers, initialStore);

  return store;
}