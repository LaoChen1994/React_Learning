import { createStore } from "redux";
import { clockReducer } from "../Reducer";

export const Store = createStore(clockReducer);
