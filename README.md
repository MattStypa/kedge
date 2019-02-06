# Kedge

[![Build Status](https://travis-ci.org/MattStypa/kedge.svg?branch=master)](https://travis-ci.org/MattStypa/kedge)
[![Latest Stable Version](https://img.shields.io/npm/v/kedge.svg)](https://www.npmjs.com/package/kedge)
[![Total Downloads](https://img.shields.io/npm/dt/kedge.svg)](https://www.npmjs.com/package/kedge)
[![License](https://img.shields.io/npm/l/kedge.svg)](https://www.npmjs.com/package/kedge)

Easy to use global state hook for React.

![Kedge](https://raw.githubusercontent.com/MattStypa/assets/master/kedge/kedge.png)

## Installation

```
npm install kedge
```

## Usage

```
import { createStore, useStore } from 'kedge';

const priceStore = createStore();

function PriceComponent() {
  const price = useStore(priceStore);
  useEffect(fetchPrice, []);

  return (
    <div>
      Price: { price }
    </div>
  );
}

function fetchPrice() {
  priceStore.set(73);
}
```

## API
  #### `const store = createStore(initialState)`
  Creates a `Store` with initial value.

  #### `const state = useStore(store)`
  Returns current state from the `Store` and subscribes the component to it. If the `Store` changes state the component will re-render.

  #### `setStore(store, newState)`
  Alias of `store.set(newState)`

  #### `Store.set(newState)`
  Sets `Store` state and re-renders all components that use it.
