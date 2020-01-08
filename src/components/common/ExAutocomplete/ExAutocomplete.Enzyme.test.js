import React from "react";
import { mount  } from "enzyme";
import ExAutocomplete from "./ExAutocomplete";
import { MockAutocompleteOptions } from "../../../utils/mockData";

function renderExAutocomplete(args) {
  const defaultProps = {
    tflabel: "",
    required: false,
    options: []
  };

  const props = { ...defaultProps, ...args };
  return mount (<ExAutocomplete {...props} />);
}

it('Auto complete has correct label tflabel prop is set', () => {
    const wrapper = renderExAutocomplete({ tflabel: "From", options: MockAutocompleteOptions });
    expect(wrapper.find(".MuiFormLabel-root").text()).toBe("From");
});

it('input property have required when we set required as "true"', () => {
    const wrapper = renderExAutocomplete({ tflabel: "From", required: true });
    expect(wrapper.find(".MuiInputBase-input").find('[required]').props().required).toEqual(true);
});
