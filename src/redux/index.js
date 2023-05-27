import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./redusers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const initialState = {};

const composeFunction =
  process.env.NODE_ENV === "development" ? composeWithDevTools : compose;

const composeEnhances = composeFunction(applyMiddleware(thunk));

const store = createStore(rootReducer(), initialState, composeEnhances);

export default store;
