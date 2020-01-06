import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

// Components
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import './ExAutocomplete.scss';

function ExAutocomplete(props) {
  const { tflabel, options } = props;
  return (
    <Autocomplete
      {...props}
      autoHighlight
      includeInputInList
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
          option => option.value === params.inputProps.value,
        );
        const valueWithAbbr = pickedItem && (
          <div className={cn('ex-input')}>
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
            <TextField {...params} label={tflabel} fullWidth />
            {valueWithAbbr}
          </>
        );
      }}
    />
  );
}

ExAutocomplete.propTypes = {
  tflabel: PropTypes.string,
};

ExAutocomplete.defaultProps = {
  tflabel: '',
};

export default ExAutocomplete;
