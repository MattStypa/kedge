import { useState } from 'react';

export function createStore(initial) {
  return new Store(initial);
}

export function useStore(store) {
  return store.use();
}

export function setStore(store, newState) {
  store.set(newState);
}

function Store(initial) {
  let current = initial;
  let dispatchers = [];

  this.set = (newState) => {
    current = newState;
    dispatchers.forEach(dispatch => dispatch(newState));
  }

  this.use = () => {
    const [state, dispatch] = useState(current);
    dispatchers.push(dispatch);

    return state;
  }
}
