import { createStore, combineReducers } from "redux";
import columnReducer from "./column";

export const store = createStore(
  combineReducers({
    column: columnReducer,
  })
);
