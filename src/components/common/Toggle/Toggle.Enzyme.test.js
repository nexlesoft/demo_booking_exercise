import React from "react";
import { shallow } from "enzyme";
import Toggle from "./Toggle";

function renderToggle(args) {
  const defaultProps = {
    propId: "",
    className: null,
    onChange: () => {},
    checked: false
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Toggle {...props} />);
}

it("Renders input, span, label", () => {
  const wrapper = renderToggle({ propId: "toggleTest" });
  expect(wrapper.find("label").length).toBe(1);
  expect(wrapper.find("span").length).toBe(2);
  expect(wrapper.find("input").length).toBe(1);
});

it("Renders correct className", () => {
  const wrapper = renderToggle({ propId: "toggleTest", className: "class-test" });
  expect(wrapper.find(".wrapper-toggle").prop('className')).toEqual("wrapper-toggle class-test");
});
