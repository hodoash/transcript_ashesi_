import userReducer from "./userReducer";
import experienceReducer from "./experienceReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
});

export default rootReducer;
