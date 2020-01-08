import React from "react";
import { shallow } from "enzyme";
import PassengerLineItem from "./PassengerLineItem";

function renderPassengerLineItem(args) {
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
  return shallow(<PassengerLineItem {...props} />);
}

it('Min, Max, Step, caption change when props change', () => {
  const wrapper = renderPassengerLineItem({
    min: 1,
    max: 20,
    step: 2,
    caption: "20+ years"
  });
  expect(wrapper.find("input").prop('min')).toEqual(1);
  expect(wrapper.find("input").prop('max')).toEqual(20);
  expect(wrapper.find("input").prop('step')).toEqual(2);
  expect(wrapper.find("small").text()).toEqual("20+ years");
});

it('Renders label, input and buttons', () => {
  const wrapper = renderPassengerLineItem();
  expect(wrapper.find('label').length).toBe(1);
  expect(wrapper.find('input').length).toBe(1);
  expect(wrapper.find('button').length).toBe(2);
});