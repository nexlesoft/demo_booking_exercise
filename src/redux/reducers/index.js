import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import flightFormReducer from "./flightFormReducer";
import localeReducer from "./localeReducer";
import loadingReducer from "./loadingReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    flightFormReducer,
    localeReducer,
    toastr: toastrReducer,
    loadingReducer
  });

export default rootReducer;
