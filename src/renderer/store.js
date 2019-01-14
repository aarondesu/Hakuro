import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";

import productsReducer from "./reducers/products-reducer";
import userReducer from "./reducers/user-reducer";
import { allManga } from "./reducers/manga-reducer";

const NODE_ENV = window.process.env;

const tempInitialData = {
  allManga: []
};

const reducers = combineReducers({
  allManga: allManga
});

const storeEnhancers = compose(applyMiddleware(thunk));

export const store = createStore(reducers, tempInitialData, storeEnhancers);
