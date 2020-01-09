import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

// Components
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

import "./LocationSelect.scss";

function LocationSelect(props) {
  const { tflabel, required, options } = props;
  return (
    <Autocomplete
      {...props}
      autoHighlight
      includeInputInList
      disableOpenOnFocus
      getOptionLabel={option => option.value}
      renderOption={option => (
        <>
          <span className="list-item-value">{option.value}</span>
          <abbr className="list-item-brief" title={option.value}>
            {option.brief}
          </abbr>
        </>
      )}
      renderInput={params => {
        const pickedItem = options.find(
          option => option.value === params.inputProps.value
        );
        const valueWithAbbr = pickedItem && (
          <div className={cn("ex-input")}>
            <span className="list-item-value list-item-value__hide">
              {pickedItem && pickedItem.value}
            </span>
            <abbr
              className="list-item-brief"
              title={pickedItem && pickedItem.value}
            >
              {pickedItem && pickedItem.brief}
            </abbr>
          </div>
        );
        return (
          <>
            <TextField
              {...params}
              label={tflabel}
              fullWidth
              required={required}
            />
            {valueWithAbbr}
          </>
        );
      }}
    />
  );
}

LocationSelect.propTypes = {
  tflabel: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.array
};

LocationSelect.defaultProps = {
  tflabel: "",
  required: false,
  options: []
};

export default LocationSelect;
