import { MEMBER_ACTION_TYPE } from "../../constants/actionTypes";
import { loginSubmit } from "../../utils";
import objectAssign from "object-assign";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function loginReducer(state = initialState.loginUser, action) {
  let newState;

  switch (action.type) {
    case MEMBER_ACTION_TYPE.LOGIN_SUCCESS:
      return objectAssign({}, state, { isLoggedIn: true });

    case MEMBER_ACTION_TYPE.LOGIN_FIELD_CHANGE_SUCCESS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToSubmitLogin = loginSubmit.necessaryDataIsProvidedToSubmitLogin(
        newState
      );
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToSubmitLogin) {
        newState.canLogin = true;
      }

      return newState;
    default:
      return state;
  }
}
