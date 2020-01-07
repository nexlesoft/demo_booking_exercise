/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import "./Toggle.scss";

const Toggle = ({ id, disabled, onChange, checked, className, ...rest }) => {
  const options = {
    className: cn(`wrapper-toggle`, className, {
      active: rest.active
    }),
    disabled,
    ...rest
  };
  return (
    <div {...options}>
      <input type="checkbox" id={id} onChange={e => onChange(e.target.value)} checked={checked} />
      <label className="wrapper-toggle--label" htmlFor={id}>
        <span className="wrapper-toggle--single" />
        <span className="wrapper-toggle--return" />
      </label>
    </div>
  );
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  checked: PropTypes.bool
};

Toggle.defaultProps = {
  id: "",
  disabled: false,
  className: null,
  onChange: () => {},
  checked: false
};

export default Toggle;
