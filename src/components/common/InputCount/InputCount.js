import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./InputCount.scss";

function InputCount({
  id,
  name,
  caption,
  max,
  min,
  step,
  value,
  onChange,
  className,
  ...rest
}) {
  return (
    <div className={cn("f-count", className)} {...rest}>
      <label className="count--label" htmlFor={id}>
        {name}
        <small>{caption}</small>
      </label>
      <div className="count--number">
        <button
          type="button"
          className="count--number--button"
          onClick={() => onChange(value - step)}
          disabled={value === min}
        >
          <span className="count--number--button--icon" />
        </button>
        <input
          type="number"
          className="count--number--input"
          max={max}
          min={min}
          step={step}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <button
          type="button"
          className="count--number--button"
          onClick={() => onChange(value + step)}
          disabled={value === max}
        >
          <span className="count--number--button--icon plus" />
        </button>
      </div>
    </div>
  );
}

InputCount.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  caption: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func
};

InputCount.defaultProps = {
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

export default InputCount;
