import React from "react";
import { mount } from "enzyme";
import { IntlProvider } from "react-intl";
import { messages_en } from "../../translations";
import FlightForm from "./FlightForm";
import { FlightType } from '../../constants/common';
import { MockFlightFormState } from "../../utils/mockData";

function renderFlightForm(args) {
  const defaultProps = {
    autocompleteOptions: [],
    onFlightFormChange: jest.fn(),
    flightFormState: {},
    openDeepLink: jest.fn()
  };

  const props = { ...defaultProps, ...args };
  return mount(
    <IntlProvider locale="en" messages={messages_en}>
      <FlightForm {...props} />
    </IntlProvider>
  );
}

it("Flight Form has all required fields: LocationSelect, DateRangePicker, Toggle, PassengerSelect, form", () => {
  const wrapper = renderFlightForm({ autocompleteOptions: [] });
  //   console.log(wrapper.debug());
  expect(wrapper.find("LocationSelect").length).toBe(2);
  expect(wrapper.find("DateRangePicker").length).toBe(1);
  expect(wrapper.find("Toggle").length).toBe(1);
  expect(wrapper.find("PassengerSelect").length).toBe(1);
  expect(wrapper.find("form").length).toBe(1);
});

it("Check advanced search have 5 options", () => {
  const wrapper = renderFlightForm({ autocompleteOptions: [] });
  expect(wrapper.find("li").length).toBe(5);
});

it("FlightType is read from prop properly", () => {
  const wrapper = renderFlightForm({ autocompleteOptions: [], flightFormState: { flightType: FlightType.Flight } });
  expect(wrapper.find(".DateInput_input").first().prop('placeholder')).toEqual("One-way");

  const wrapper2 = renderFlightForm({ autocompleteOptions: [], flightFormState: { flightType: FlightType.Outbound } });
  expect(wrapper2.find(".DateInput_input").first().prop('placeholder')).toEqual("Outbound flight");
});

