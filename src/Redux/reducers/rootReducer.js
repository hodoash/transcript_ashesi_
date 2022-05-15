import userReducer from "./userReducer";
import experienceReducer from "./experienceReducer";
import { combineReducers } from "redux";
import tempExperienceReducer from "./tempExperienceReducer";

const rootReducer = combineReducers({
  user: userReducer,
  experience: experienceReducer,
  tempExp:tempExperienceReducer,
});

export default rootReducer;
