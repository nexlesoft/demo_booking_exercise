/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Toggle.scss";

const Toggle = ({ type, children, disabled, className, ...rest }) => {
  const options = {
    className: cn(`wrapper-toggle`, className, {
      active: rest.active
    }),
    disabled,
    ...rest
  };
  return (
    <div {...options}>
      <input type="checkbox" name="aaa" id="aaa" />
      <label className="wrapper-toggle--label" htmlFor="aaa">
        <span className="wrapper-toggle--single" />
        <span className="wrapper-toggle--return" />
      </label>
    </div>
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
