import React from "react";
import { shallow } from "enzyme";
import HomeView from "./HomeView";

function renderHomeView(args) {
  const defaultProps = {
    history: {},
    flightFormState: {},
    onFlightFormChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<HomeView {...props} />);
}

it('Render Home View Success', () => {
    const wrapper = renderHomeView();
    expect(true).toEqual(true);
});