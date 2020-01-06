import objectAssign from "object-assign";
import { FLIGHT_FORM_ACTION_TYPE } from "../../constants/actionTypes";
import initialState from "./initialState";

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.

export default function flightFormReducer(
  state = initialState.flightForm,
  action
) {
  switch (action.type) {
    case FLIGHT_FORM_ACTION_TYPE.FLIGHT_FORM_VALUE_CHANGE: {
      const newState = objectAssign({}, state);
      const { fieldName, value } = action.payload;
      switch (fieldName) {
        case "adultAmount":
        case "childrenAmount":
        case "infantsAmount": {
          newState[fieldName] = value * 1;
          break;
        }
        default:
          newState[fieldName] = value;
      }
      return newState;
    }
    default:
      return state;
  }
}
