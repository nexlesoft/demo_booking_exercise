import React from "react";
import { mount  } from "enzyme";
import ExAutocomplete from "./ExAutocomplete";
import AutocompleteOptions from '../../../constants/demoData';

function renderExAutocomplete(args) {
  const defaultProps = {
    tflabel: "",
    required: false,
    options: []
  };

  const props = { ...defaultProps, ...args };
  return mount (<ExAutocomplete {...props} />);
}

it('labels input as "From" when tflabel changed to "From"', () => {
    const wrapper = renderExAutocomplete({ tflabel: "From", options: AutocompleteOptions });
    expect(wrapper.find(".MuiFormLabel-root").text()).toBe("From");
});

it('input property have required when we set required as "true"', () => {
    const wrapper = renderExAutocomplete({ tflabel: "From", required: true });
    expect(wrapper.find(".MuiInputBase-input").find('[required]').props().required).toEqual(true);
});