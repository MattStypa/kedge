import React from 'react';
import { createStore, useStore } from '../src/index.js';
import renderer from 'react-test-renderer';

describe('kedge', () => {
  it('provides initial value', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);
    const rendered = renderer.create(<Component/>);

    expect(rendered.toJSON().children[0]).toEqual('abc');
  });

  it('provides current value', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);

    store.set('xyz');

    const rendered = renderer.create(<Component/>);

    expect(rendered.toJSON().children[0]).toEqual('xyz');
  });

  it('updates values', () => {
    const store = createStore('abc');
    const Component = getTestComponent(store);
    const rendered = renderer.create(<Component/>);

    store.set('xyz')

    expect(rendered.toJSON().children[0]).toEqual('xyz');
  });
});

function getTestComponent(store) {
  return () => {
    const value = useStore(store);
    return <div>{value}</div>;
  }
}
