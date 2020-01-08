import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { PassengerLineItem } from "../common";

import "./PassengerSelect.scss";

function PassengerSelect({ amounts, onChange, className, ...rest }) {
  const { adultAmount, childrenAmount, infantsAmount } = amounts;
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className={cn("passager_number", className)} {...rest}>
      <fieldset>
        <legend className="is-visuallyhidden">Passengers</legend>
        <div
          className={cn("passager_number--trigger", dropdown && "down")}
          onClick={() => setDropdown(!dropdown)}
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
              onClick={() => setDropdown(false)}
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
  onChange: PropTypes.func
};

PassengerSelect.defaultProps = {
  amounts: {},
  onChange: () => {}
};

export default PassengerSelect;
