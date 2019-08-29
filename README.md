# Kedge

[![Build Status](https://travis-ci.org/MattStypa/kedge.svg?branch=master)](https://travis-ci.org/MattStypa/kedge)
[![Latest Stable Version](https://img.shields.io/npm/v/kedge.svg)](https://www.npmjs.com/package/kedge)
[![Total Downloads](https://img.shields.io/npm/dt/kedge.svg)](https://www.npmjs.com/package/kedge)
[![License](https://img.shields.io/npm/l/kedge.svg)](https://www.npmjs.com/package/kedge)

Easy to use global state hook for React.

![Kedge](https://raw.githubusercontent.com/MattStypa/assets/master/kedge/kedge.png)

[Read a little bit more here.](https://medium.com/@mattstypa/global-react-hook-usestate-86e6dd78a635)

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
  - #### `const store = createStore(initialState, optionalName)`
  Creates a `Store` with initial value. Optionally, it accepts a store name that is used in React Dev Tools

  - #### `const state = useStore(store)`
  Returns current state from the `Store` and subscribes the component to it. If the `Store` changes state the component will re-render.

  - #### `Store.set(newState)`
  Sets `Store` state and re-renders all components that use it.

  - #### `Store.reset()`
  Sets `Store` to initial value and re-renders all components that use it.
