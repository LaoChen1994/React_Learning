import counterReducer from "./counterReducer";
import postReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  post: postReducer
});

export default rootReducer;
