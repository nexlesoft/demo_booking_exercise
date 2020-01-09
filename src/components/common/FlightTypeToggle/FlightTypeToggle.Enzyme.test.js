import React from "react";
import { shallow } from "enzyme";
import FlightTypeToggle from "./FlightTypeToggle";

function renderFlightTypeToggle(args) {
  const defaultProps = {
    propId: "",
    className: null,
    onChange: () => {},
    checked: false
  };

  const props = { ...defaultProps, ...args };
  return shallow(<FlightTypeToggle {...props} />);
}

it("Renders input, span, label", () => {
  const wrapper = renderFlightTypeToggle({ propId: "toggleTest" });
  expect(wrapper.find("label").length).toBe(1);
  expect(wrapper.find("span").length).toBe(2);
  expect(wrapper.find("input").length).toBe(1);
});

it("Renders correct className", () => {
  const wrapper = renderFlightTypeToggle({ propId: "toggleTest", className: "class-test" });
  expect(wrapper.find(".wrapper-toggle").prop('className')).toEqual("wrapper-toggle class-test");
});
