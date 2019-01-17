import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import { allManga } from "./reducers/manga-reducer";

const NODE_ENV = window.process.env;

const tempInitialData = {
  allManga: []
};

const reducers = combineReducers({
  allManga: allManga
});

let storeEnhancers;
if (NODE_ENV === "development" || NODE_ENV === "pre-release") {
  storeEnhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
} else {
  storeEnhancers = compose(applyMiddleware(thunk));
}

export const store = createStore(reducers, tempInitialData, storeEnhancers);

// Handle Subscription
let previousValue = {};
store.subscribe(() => {
  let currentValue = store.getState();

  previousValue = currentValue;
});
