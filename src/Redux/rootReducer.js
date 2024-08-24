import { combineReducers } from "redux";
import spaceReducer from "./spaceSlice";

const rootReducer = combineReducers({
  space: spaceReducer,
});

export default rootReducer;
