import { LOCALE_ACTION_TYPE } from "../../constants/actionTypes";
import initialState from "./initialState";
import objectAssign from "object-assign";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function localeReducer(state = initialState.locale, action) {
  switch (action.type) {
    case LOCALE_ACTION_TYPE.CHANGE_LOCATE_SUCCESS:
      return objectAssign({}, state, { locale: action.value });
    default:
      return state;
  }
}
