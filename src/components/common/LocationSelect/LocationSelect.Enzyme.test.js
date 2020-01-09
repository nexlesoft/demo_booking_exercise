import React from "react";
import { mount  } from "enzyme";
import LocationSelect from "./LocationSelect";
import { MockAutocompleteOptions } from "../../../utils/mockData";

function renderLocationSelect(args) {
  const defaultProps = {
    tflabel: "",
    required: false,
    options: []
  };

  const props = { ...defaultProps, ...args };
  return mount (<LocationSelect {...props} />);
}

it('Auto complete has correct label tflabel prop is set', () => {
    const wrapper = renderLocationSelect({ tflabel: "From", options: MockAutocompleteOptions });
    expect(wrapper.find(".MuiFormLabel-root").text()).toBe("From");
});

it('input property have required when we set required as "true"', () => {
    const wrapper = renderLocationSelect({ tflabel: "From", required: true });
    expect(wrapper.find(".MuiInputBase-input").find('[required]').props().required).toEqual(true);
});
