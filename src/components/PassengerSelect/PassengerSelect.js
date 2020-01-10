import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { PassengerLineItem } from "../common";

import "./PassengerSelect.scss";

function PassengerSelect({ amounts, onChange, onFocus, onBlur, className, ...rest }) {
  const { adultAmount, childrenAmount, infantsAmount } = amounts;
  const [dropdown, setDropdown] = useState(false);
  const wrapperRef = useRef(null);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setDropdown(false);
      onBlur();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  function onSetDropDown(dropdownState) {
    setDropdown(dropdownState);
    if (dropdownState) {
      onFocus();
    } else {
      onBlur();
    }
  }

  return (
    <div className={cn("passager_number", className)} {...rest} ref={wrapperRef}>
      <fieldset>
        <legend className="is-visuallyhidden">Passengers</legend>
        <div
          role="button"
          className={cn("passager_number--trigger", dropdown && "down")}
          onClick={() => onSetDropDown(!dropdown)}
        >
          <span className="passager_number--trigger--caption">{`${adultAmount} Adult, ${childrenAmount} Children, ${infantsAmount} Infant`}</span>
          <span className="passager_number--trigger--label">{`${adultAmount +
            childrenAmount +
            infantsAmount} Passengers`}</span>
        </div>
        {dropdown && (
          <div className="drop-down">
            <PassengerLineItem
              id="adults"
              name="Adults"
              caption="12+ years"
              max={40}
              min={1}
              value={adultAmount}
              onChange={value => onChange("adultAmount", value)}
            />
            <PassengerLineItem
              id="children"
              name="Children"
              caption="2-11 years"
              max={40}
              min={0}
              value={childrenAmount}
              onChange={value => onChange("childrenAmount", value)}
            />
            <PassengerLineItem
              id="infants"
              name="Infants"
              caption="0-1 years"
              max={40}
              min={0}
              value={infantsAmount}
              onChange={value => onChange("infantsAmount", value)}
            />
            <button
              className="button-close"
              type="button"
              onClick={() => onSetDropDown(false)}
            >
              Close
            </button>
          </div>
        )}
      </fieldset>
    </div>
  );
}

PassengerSelect.propTypes = {
  amounts: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

PassengerSelect.defaultProps = {
  amounts: {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {}
};

export default PassengerSelect;
