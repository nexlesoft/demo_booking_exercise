import configureStore from './configureStore';
import * as flightActions from "../actions/flightFormActions";

it("Should handle change flight form value", function() {
  // arrange
  const store = configureStore();

  // act
  const action = flightActions.flightFormChange("adultAmount", 2);
  store.dispatch(action);

  // assert
  const flightFormState = store.getState().flightFormReducer;
  expect(flightFormState.adultAmount).toEqual(2);
});
