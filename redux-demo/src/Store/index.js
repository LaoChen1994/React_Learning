import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

let Store = createStore(rootReducer, applyMiddleware(thunk));

export { Store };
