import _ from 'lodash';
import flightFormReducer from './flightFormReducer';
import * as flightActions from '../actions/flightFormActions';

describe("FlightFormReducer", () => {
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

  it("should change flightForm data when getting action FLIGHT_FORM_VALUE_CHANGE", () => {
    // arrange
    const payload = { fieldName: 'origin', value: 'VAS' };
    const action = flightActions.flightFormChange(payload.fieldName, payload.value);

    // act
    const newState = flightFormReducer(initialState, action);

    // assert
    expect(_.size(newState)).toEqual(8);
    expect(newState[payload.fieldName]).toEqual(payload.value);
  });
});
