import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import * as types from "../../constants/actionTypes";
import * as flightFormActions from "./flightFormActions";

const buildStore = configureStore([thunk]);

describe("flightFormActions", () => {
  let store;
  const initialState = {
    origin: "",
    destination: "",
    flightType: "outbound",
    departureDate: "",
    adultAmount: 1,
    childrenAmount: 0,
    infantsAmount: 0,
    flightClass: "economy"
  };
  beforeEach(() => {
    store = buildStore(initialState);
  });

  it("should create action FLIGHT_FORM_VALUE_CHANGE", () => {
    // arrange
    const expectedAction = {
      type: types.FLIGHT_FORM_ACTION_TYPE.FLIGHT_FORM_VALUE_CHANGE,
      payload: { fieldName: "test", value: "testvalue" }
    };

    // act
    const action = flightFormActions.flightFormChange("test", "testvalue");

    // assert
    expect(action).toEqual(expectedAction);
  });

  it("action FLIGHT_FORM_VALUE_CHANGE is dispatched when onFlightFormChange runs", () => {
    const fieldName = "testv1";
    const value = "testvaluev1";
    store.dispatch(flightFormActions.onFlightFormChange(fieldName, value));
    expect(store.getActions()).toContainEqual(flightFormActions.flightFormChange(fieldName, value));
  });
});
