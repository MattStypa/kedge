# Kedge

Easy to use global state hook for React.

## Note

Kedge uses React hooks that are available in React version 16.7.0. At this moment that version is only available as an alpha release.

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
