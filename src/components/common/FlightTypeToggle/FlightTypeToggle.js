/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./FlightTypeToggle.scss";

const FlightTypeToggle = ({ propId, onChange, checked, className, ...rest }) => {
  const options = {
    className: cn(`wrapper-toggle`, className, {
      active: rest.active
    }),
    ...rest
  };
  return (
    <div {...options}>
      <input type="checkbox" id={propId} onChange={e => onChange(e.target.value)} checked={checked} />
      <label className="wrapper-toggle--label" htmlFor={propId}>
        <span className="wrapper-toggle--single" />
        <span className="wrapper-toggle--return" />
      </label>
    </div>
  );
};

FlightTypeToggle.propTypes = {
  propId: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

FlightTypeToggle.defaultProps = {
  propId: "",
  className: null,
  onChange: () => {},
  checked: false
};

export default FlightTypeToggle;
