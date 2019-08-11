import { createStore } from "redux";
import { todoReducer } from "../Reducer";

export const todoStore = createStore(todoReducer);
