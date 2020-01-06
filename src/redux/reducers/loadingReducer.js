import { APP_ACTION_TYPE } from "../../constants/actionTypes";
import initialState from "./initialState";
import objectAssign from "object-assign";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function loadingReducer(state = initialState.loading, action) {
  switch (action.type) {
    case APP_ACTION_TYPE.SHOW_LOADING:
      return objectAssign({}, state, { loading: true });
    case APP_ACTION_TYPE.HIDE_LOADING:
      return objectAssign({}, state, { loading: false });
    default:
      return state;
  }
}
