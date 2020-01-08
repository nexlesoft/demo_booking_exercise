import React from "react";
import { shallow } from "enzyme";
import Loading from "./Loading";

function renderLoading(args) {
  const defaultProps = {
    msg: "",
    className: "",
    loading: false
  };

  const props = { ...defaultProps, ...args };
  return shallow(<Loading {...props} />);
}

it("Renders correct number of image and span when loading is true", () => {
  const wrapper = renderLoading({ loading: true });
  expect(wrapper.find("img").length).toBe(1);
  expect(wrapper.find("span").length).toBe(1);
});
