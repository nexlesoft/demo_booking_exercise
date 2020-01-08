import React from "react";
import { shallow } from "enzyme";
import InputCount from "./InputCount";

function renderInputCount(args) {
  const defaultProps = {
    className: "",
    name: "Adults",
    id: "adults-12",
    caption: "12+ years",
    min: 0,
    max: 40,
    step: 1,
    value: 0,
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<InputCount {...props} />);
}

it('Min, Max, Step change when props change', () => {
  const wrapper = renderInputCount({
    min: 1,
    max: 20,
    step: 2
  });
  expect(wrapper.find("input").prop('min')).toEqual(1);
  expect(wrapper.find("input").prop('max')).toEqual(20);
  expect(wrapper.find("input").prop('step')).toEqual(2);
});

it('Renders label, input and buttons', () => {
  const wrapper = renderInputCount();
  expect(wrapper.find('label').length).toBe(1);
  expect(wrapper.find('input').length).toBe(1);
  expect(wrapper.find('button').length).toBe(2);
});