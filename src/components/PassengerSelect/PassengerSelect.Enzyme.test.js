import React from "react";
import { shallow } from "enzyme";
import PassengerSelect from "./PassengerSelect";

function renderPassengerSelect(args) {
  const defaultProps = {
    amounts: {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<PassengerSelect {...props} />);
}

it("Total amount of passengers is updated correctly", () => {
  const wrapper = renderPassengerSelect({
    amounts: { adultAmount: 1, childrenAmount: 2, infantsAmount: 1 }
  });
  expect(wrapper.find(".passager_number--trigger--label").text()).toEqual(
    "4 Passengers"
  );
});

it("adult amount, children amount, infants amount texts are updated correctly", () => {
  const wrapper = renderPassengerSelect({
    amounts: { adultAmount: 1, childrenAmount: 2, infantsAmount: 1 }
  });
  expect(wrapper.find(".passager_number--trigger--caption").text()).toEqual(
    "1 Adult, 2 Children, 1 Infant"
  );
});

it("The passenger select does not show options for adult, child, infant if not clicked", () => {
  const wrapper = renderPassengerSelect({
    amounts: {}
  });
  const dropdown = wrapper.find(".passager_number--trigger");
  expect(wrapper.find(".drop-down").exists()).toEqual(false);
  expect(wrapper.find("PassengerLineItem").length).toBe(0);
});

it("The passenger select has 3 options for adult, child, infant on click", () => {
  const wrapper = renderPassengerSelect({
    amounts: {}
  });
  const dropdown = wrapper.find(".passager_number--trigger");
  dropdown.simulate("click");
  expect(wrapper.find(".drop-down").exists()).toEqual(true);
  expect(wrapper.find("PassengerLineItem").length).toBe(3);
});
