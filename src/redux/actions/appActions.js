import { APP_ACTION_TYPE } from "../../constants/actionTypes";

export function showLoading() {
  return dispatch => {
    dispatch({
      type: APP_ACTION_TYPE.SHOW_LOADING
    });
  };
}

export function hideLoading() {
  return dispatch => {
    dispatch({
      type: APP_ACTION_TYPE.HIDE_LOADING
    });
  };
}

export function setHeaderText(text) {
  return dispatch => {
    dispatch({
      type: APP_ACTION_TYPE.SET_HEADER_TEXT,
      headerText: text
    });
  };
}
