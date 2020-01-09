/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-dates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { FormattedMessage } from "react-intl";
import LocationSelect from "../common/LocationSelect";
import FlightTypeToggle from "../common/FlightTypeToggle";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import PassengerSelect from "../PassengerSelect";
import { FlightType } from "../../constants/common";

import "./FlightForm.scss";

const flightIcon = require("../../images/flight.png");

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };
  }

  onFlightTypeChange = flightType => {
    const { onFlightFormChange } = this.props;
    onFlightFormChange(
      "flightType",
      flightType === FlightType.Flight ? FlightType.Outbound : FlightType.Flight
    );
  };

  render() {
    const {
      autocompleteOptions,
      onFlightFormChange,
      flightFormState: {
        adultAmount,
        childrenAmount,
        infantsAmount,
        flightType
      },
      openDeepLink
    } = this.props;
    const isOutBound = flightType === FlightType.Outbound;
    const startDateLabel = isOutBound ? "Outbound flight" : "One-way";

    return (
      <div className="flight-wrapper">
        <form onSubmit={() => openDeepLink()}>
          <div className="locations fl-input">
            <LocationSelect
              className="fl-input__autocomplete fl-input__autocomplete_from"
              options={autocompleteOptions}
              tflabel="From"
              onChange={(event, value) =>
                onFlightFormChange("origin", value && value.brief)
              }
              required
            />
            <div className="fight-icon">
              <img src={flightIcon} alt="flight" />
            </div>
            <LocationSelect
              className="fl-input__autocomplete fl-input__autocomplete_to"
              options={autocompleteOptions}
              tflabel="To"
              onChange={(event, value) =>
                onFlightFormChange("destination", value && value.brief)
              }
              required
            />
          </div>
          <div className="dates">
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
              disabled={!isOutBound && "endDate"}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => {
                onFlightFormChange("departureDate", startDate);
                this.setState({ startDate, endDate });
              }}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => {
                this.setState({ focusedInput });
              }}
              startDatePlaceholderText={startDateLabel}
              endDatePlaceholderText="Return flight"
              required
            />
            <FlightTypeToggle
              propId="outboun"
              checked={isOutBound}
              onChange={() => this.onFlightTypeChange(flightType)}
            />
          </div>
          <div className="passengers">
            <PassengerSelect
              amounts={{ adultAmount, childrenAmount, infantsAmount }}
              onChange={(fieldName, value) =>
                onFlightFormChange(fieldName, value)
              }
            />
          </div>
          <div className="submit">
            <button type="submit" className="flight-wrapper--button">
              <FormattedMessage id="home.search" />
            </button>
          </div>

          <div className="links list-advanced">
            <ul>
              <li>
                <FormattedMessage id="home.advanced_search" />
              </li>
              <li>
                <FormattedMessage id="home.arrivals_and_departures" />
              </li>
              <li>
                <FormattedMessage id="home.inspire_me" />
              </li>
              <li>
                <FormattedMessage id="home.miles_more" />
              </li>
              <li>
                <FormattedMessage id="home.Check_in" />
              </li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}

FlightForm.propTypes = {
  autocompleteOptions: PropTypes.array,
  onFlightFormChange: PropTypes.func,
  flightFormState: PropTypes.object,
  openDeepLink: PropTypes.func
};

FlightForm.defaultProps = {
  autocompleteOptions: [],
  onFlightFormChange: () => {},
  flightFormState: {},
  openDeepLink: () => {}
};

export default FlightForm;
