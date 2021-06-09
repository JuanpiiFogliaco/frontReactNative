import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import productsReducer from "./modules/products";

const reducers = combineReducers({
  products: productsReducer,
});

export default createStore(reducers, applyMiddleware(thunk));
