import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import { mangaList, mangaInfo } from "./reducers/manga-reducer";

const { NODE_ENV } = window.process.env;

const tempInitialData = {
  mangaList: []
};

const reducers = combineReducers({
  mangaList: mangaList,
  mangaInfo: mangaInfo
});

let storeEnhancers;
if (NODE_ENV === "development") {
  console.log("Store(development)");
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
