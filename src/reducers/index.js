import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./authReducer";
import newsletter from "./newsletterReducer";
import requests from "./requestsReducer";
import header from "./headerReducer";

const rootReducer = combineReducers({
  form,
  auth,
  newsletter,
  requests,
  header,
});

export default rootReducer;
