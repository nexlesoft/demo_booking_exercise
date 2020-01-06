import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { InputCount } from "../common";

import "./PassagerNumber.scss";

function PassagerNumber({ amounts, onChange, className, ...rest }) {
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
          <span className="passager_number--trigger--caption">{`${adultAmount ||
            0} Adult, ${childrenAmount || 0} Children, ${infantsAmount ||
            0} Infant`}</span>
          <span className="passager_number--trigger--label">{`${adultAmount ||
            0 + childrenAmount ||
            0 + infantsAmount ||
            0} Passengers`}</span>
        </div>
        {dropdown && (
          <>
            <InputCount
              id="adults"
              name="Adults"
              caption="12+ years"
              max={40}
              min={1}
              value={adultAmount}
              onChange={value => onChange("adultAmount", value)}
            />
            <InputCount
              id="children"
              name="Children"
              caption="2-11 years"
              max={40}
              min={0}
              value={childrenAmount}
              onChange={value => onChange("childrenAmount", value)}
            />
            <InputCount
              id="infants"
              name="Infants"
              caption="0-1 years"
              max={40}
              min={0}
              value={infantsAmount}
              onChange={value => onChange("infantsAmount", value)}
            />
            <button type="button" onClick={() => setDropdown(false)}>
              close
            </button>
          </>
        )}
      </fieldset>
    </div>
  );
}

PassagerNumber.propTypes = {
  amounts: PropTypes.object,
  onChange: PropTypes.func
};

PassagerNumber.defaultProps = {
  amounts: {},
  onChange: () => {}
};

export default PassagerNumber;
