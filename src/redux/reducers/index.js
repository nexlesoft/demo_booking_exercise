import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import localeReducer from "./localeReducer";
import { connectRouter } from "connected-react-router";
import { reducer as toastrReducer } from "react-redux-toastr";
import loadingReducer from "./loadingReducer";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    loginReducer,
    localeReducer,
    toastr: toastrReducer,
    loadingReducer
  });

export default rootReducer;
