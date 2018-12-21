import { useEffect, useState } from 'react';

export function createStore(initialState) {
  return new Store(initialState);
}

export function useStore(store) {
  return store.use();
}

export function setStore(store, newState) {
  store.set(newState);
}

function Store(initialState) {
  let currentState = initialState;
  let dispatchers = [];

  const subscribe = (dispatcher) => {
    const count = dispatchers.push(dispatcher);

    return () => unsubscribe(count - 1);
  };

  const unsubscribe = (index) => {
    dispatchers[index] = null;
  };

  this.set = (newState) => {
    currentState = newState;
    dispatchers.forEach(dispatch => dispatch && dispatch(newState));
  }

  this.use = () => {
    const [state, dispatcher] = useState(currentState);
    useEffect(() => subscribe(dispatcher), []);

    return state;
  }
}
