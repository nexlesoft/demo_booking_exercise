import { FLIGHT_FORM_ACTION_TYPE } from "../../constants/actionTypes";
import { showLoading, hideLoading } from "./appActions";

export function flightFormChange(fieldName, value) {
  return {
    type: FLIGHT_FORM_ACTION_TYPE.FLIGHT_FORM_VALUE_CHANGE,
    payload: { fieldName, value }
  };
}

export function onFlightFormChange(fieldName, value) {
  return dispatch => {
    dispatch(flightFormChange(fieldName, value));
  };
}
