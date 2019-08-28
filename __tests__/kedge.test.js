import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { createStore, useStore } from '../src/index.js';

describe('kedge', () => {
  let container;
  let renderCount;

  beforeEach(() => {
    renderCount = 0;
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('provides initial value', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    act(() => { render(<Component/>, container) });

    expect(container.querySelector('div').textContent).toBe('abc');
  });

  it('provides current value', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    act(() => { store.set('xyz') });
    act(() => { render(<Component/>, container) });

    expect(container.querySelector('div').textContent).toBe('xyz');
  });

  it('updates values', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    act(() => { render(<Component/>, container) });
    act(() => { store.set('xyz') });

    expect(container.querySelector('div').textContent).toBe('xyz');
  });

  it('resets values', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    act(() => { render(<Component/>, container) });
    act(() => { store.set('xyz') });
    act(() => { store.reset() });

    expect(container.querySelector('div').textContent).toBe('abc');
  });

  it('does not waste render cycles', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    act(() => { render(<Component/>, container) });
    act(() => { store.set('a') });
    act(() => { store.set('b') });
    act(() => { store.set('c') });
    act(() => { store.set('d') });
    act(() => { store.set('e') });

    expect(renderCount).toEqual(6);
  });

  function getTestComponent(store) {
    return () => {
      renderCount++;
      const value = useStore(store);
      return <div>{value}</div>;
    }
  }
});
