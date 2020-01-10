/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-dates";
import { START_DATE, END_DATE } from "react-dates/lib/constants";
import cn from 'classnames';

import { FormattedMessage } from "react-intl";
import LocationSelect from "../common/LocationSelect";
import FlightTypeToggle from "../common/FlightTypeToggle";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import PassengerSelect from "../PassengerSelect";
import { FlightType } from "../../constants/common";

import "./FlightForm.scss";


const flightIcon = require("../../assets/images/flight.png");

const ANIMATION_FOR_LABEL = "lbl-animated";
const START_DATE_ID = "startId";
const END_DATE_ID = "endId";

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null
    };

    this.startDate = React.createRef();
    this.returnDate = React.createRef();
  }

  onFlightTypeChange = flightType => {
    const { onFlightFormChange } = this.props;
    onFlightFormChange(
      "flightType",
      flightType === FlightType.Flight ? FlightType.Outbound : FlightType.Flight
    );
  };

  onForcusDate = focusInput => {
    const prevFocused = this.state.focusedInput;
    if (focusInput) {
      this.props.onFocus("DateRangePicker");
    } else {
      this.props.onBlur("DateRangePicker");
    }
    this.setState(
      {
        focusedInput: focusInput
      },
      () => {
        switch (this.state.focusedInput) {
          case START_DATE:
            this.startDate.classList.add(ANIMATION_FOR_LABEL);
            const startDateElm = document.getElementById(START_DATE_ID);
            startDateElm.focus();

            this.onBlurDate(END_DATE);
            break;
          case END_DATE:
            this.returnDate.classList.add(ANIMATION_FOR_LABEL);
            const endDateElm = document.getElementById(END_DATE_ID);
            endDateElm.focus();
            this.onBlurDate(START_DATE);
            break;
          default:
            this.onBlurDate(prevFocused);
        }
      }
    );
  };

  onBlurDate = focusInput => {
    if (focusInput === START_DATE && this.startDate) {
      const startDateInputValue = document.getElementById("startId").value;
      if (this.state.startDate === null && !startDateInputValue) {
        this.startDate.classList.remove(ANIMATION_FOR_LABEL);
      }
    }
    if (focusInput === END_DATE && this.returnDate) {
      const endDateInputValue = document.getElementById("endId").value;
      if (this.state.endDate === null && !endDateInputValue) {
        this.returnDate.classList.remove(ANIMATION_FOR_LABEL);
      }
    }
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
      openDeepLink,
      onFocus,
      onBlur,
      overlay
    } = this.props;
    const isOutBound = flightType === FlightType.Outbound;
    const startDateLabel = isOutBound ? "Outbound flight" : "One-way";
    const isLocationSelectFocus = overlay && overlay.overlay && overlay.comp === "LocationSelect";
    const isCalendarFocus = overlay && overlay.overlay && overlay.comp === "DateRangePicker";
    const isPassengersFocus = overlay && overlay.overlay && overlay.comp === "PassengerSelect";

    return (
      <div className="flight-wrapper">
        <form onSubmit={() => openDeepLink()}>
          <div className={cn("locations fl-input", isLocationSelectFocus && "comp-focus")}>
            <LocationSelect
              className="fl-input__autocomplete fl-input__autocomplete_from"
              options={autocompleteOptions}
              tflabel="From"
              onChange={(event, value) =>
                onFlightFormChange("origin", value && value.brief)
              }
              required
              onFocus={() => onFocus("LocationSelect")}
              onBlur={() => onBlur("LocationSelect")}
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
              onFocus={() => onFocus("LocationSelect")}
              onBlur={() => onBlur("LocationSelect")}
            />
          </div>
          <div className={cn("dates", isCalendarFocus && "comp-focus")}>
            <div
              onClick={() => this.onForcusDate(START_DATE)}
              ref={elm => (this.startDate = elm)}
              className="lbl-formControl left"
            >
              {startDateLabel}
            </div>
            <div
              onClick={() => isOutBound && this.onForcusDate(END_DATE)}
              ref={elm => (this.returnDate = elm)}
              className="lbl-formControl right"
            >
              Return flight
            </div>

            <DateRangePicker
              startDateId={START_DATE_ID}
              endDateId={END_DATE_ID}
              disabled={!isOutBound && "endDate"}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => {
                let departureDate = startDate;
                if (startDate) {
                  departureDate = startDate.format("LL");
                  onFlightFormChange("departureDate", departureDate);
                }
                this.setState({ startDate, endDate }, () => {
                  this.onBlurDate();
                });
              }}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => {
                this.onForcusDate(focusedInput);
              }}
              startDatePlaceholderText=""
              endDatePlaceholderText=""
              required
              displayFormat="dd DD/MM/YYYY"
            />
            <FlightTypeToggle
              propId="outboun"
              checked={isOutBound}
              onChange={() => this.onFlightTypeChange(flightType)}
            />
          </div>
          <div className={cn("passengers", isPassengersFocus && "comp-focus")}>
            <PassengerSelect
              amounts={{ adultAmount, childrenAmount, infantsAmount }}
              onChange={(fieldName, value) =>
                onFlightFormChange(fieldName, value)
              }
              onFocus={() => onFocus("PassengerSelect")}
              onBlur={() => onBlur("PassengerSelect")}
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
  openDeepLink: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  overlay: PropTypes.object
};

FlightForm.defaultProps = {
  autocompleteOptions: [],
  onFlightFormChange: () => {},
  flightFormState: {},
  openDeepLink: () => {},
  onFocus: () => {},
  onBlur: () => {},
  overlay: false
};

export default FlightForm;
