/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Toggle.scss";

const Toggle = ({ type, children, disabled, className, ...rest }) => {
  const options = {
    className: cn(`toggle`, className, {
      active: rest.active
    }),
    disabled,
    ...rest
  };
  return (
    <label {...options}>
      <input type="checkbox" />
      <span className="slider round">
        <span />
        <span />
      </span>
    </label>
  );
};

Toggle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  hidden: PropTypes.string
};

Toggle.defaultProps = {
  disabled: false,
  hidden: "",
  children: "",
  className: null
};

export default Toggle;
