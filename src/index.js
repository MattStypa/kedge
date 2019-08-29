import React, { useState, useLayoutEffect, useDebugValue } from 'react';

export function createStore(initialState, name) {
  return new Store(initialState, name);
}

export function useStore(store) {
  const [state, dispatcher] = useState(store.state);
  useLayoutEffect(() => store.subscribe(dispatcher), []);
  useDebugValue(store.name);

  return state;
}

function Store(initialState, name) {
  let dispatchers = [];
  this.name = name;
  this.state = initialState;

  this.subscribe = (dispatcher) => {
    const index = dispatchers.push(dispatcher);

    return () => dispatchers[index - 1] = null;
  };

  this.set = (newState) => {
    this.state = newState;
    dispatchers.forEach(dispatch => dispatch && dispatch(newState));
  };

  this.reset = () => this.set(initialState);
}
