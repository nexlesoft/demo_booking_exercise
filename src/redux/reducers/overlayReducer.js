import objectAssign from "object-assign";
import { APP_ACTION_TYPE } from "../../constants/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function overlayReducer(state = initialState.overlay, action) {
  switch (action.type) {
    case APP_ACTION_TYPE.SHOW_OVERLAY:
      return objectAssign({}, state, { overlay: true, comp: action.comp });
    case APP_ACTION_TYPE.HIDE_OVERLAY:
      return objectAssign({}, state, { overlay: false, comp: action.comp });
    default:
      return state;
  }
}
