import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";
import mangaReducer from "./reducers/manga";

const NODE_ENV = window.process.env;

const tempInitialData = {
  manga: {}
};

const reducers = combineReducers({
  products: productsReducer,
  user: userReducer,
  manga: mangaReducer
});

const storeEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(reducers, tempInitialData, storeEnhancers);
