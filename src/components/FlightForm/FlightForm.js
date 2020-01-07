/* eslint-disable react/destructuring-assignment */
import React from "react";
import PropTypes from "prop-types";
import { DateRangePicker } from "react-dates";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ExAutocomplete from "../common/ExAutocomplete";
import Toggle from "../common/Toggle";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import PassagerNumber from "../PassagerNumber";

import "./FlightForm.scss";

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      isOutBound: false
    };
  }

  render() {
    const {
      autocompleteOptions,
      onFlightFormChange,
      flightFormState: { adultAmount, childrenAmount, infantsAmount },
      openDeepLink
    } = this.props;
    const startDateLabel = this.state.isOutBound ? "Outbound flight" : "One-way";

    return (
      <Container className="flight-wrapper">
        <Row>
          <div className="column1 fl-input">
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_from"
              options={autocompleteOptions}
              tflabel="From"
              onChange={(event, value) =>
                onFlightFormChange("origin", value && value.brief)
              }
            />
            <div className="fight-icon">
              <img src={require("../../images/flight.png")} alt="flight" />
            </div>
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_to"
              options={autocompleteOptions}
              tflabel="To"
              onChange={(event, value) =>
                onFlightFormChange("destination", value && value.brief)
              }
            />
          </div>
          <div className="column2">
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
              disabled={!this.state.isOutBound && "endDate"}
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
            />
            <Toggle
              id="outboun"
              checked={this.state.isOutBound}
              onChange={() =>
                this.setState(prevState => ({
                  isOutBound: !prevState.isOutBound
                }))
              }
            />
          </div>
          <div className="column3">
            <PassagerNumber
              amounts={{ adultAmount, childrenAmount, infantsAmount }}
              onChange={(fieldName, value) =>
                onFlightFormChange(fieldName, value)
              }
            />
          </div>
        </Row>
        <Row className="center-flex">
          <div className="column4 list-advanced">
            <ul>
              <li>Advanced search</li>
              <li>Arrivals and departures</li>
              <li>Inspire me</li>
              <li>Miles & More</li>
              <li>Check-in</li>
            </ul>
          </div>
          <div className="column3">
            <button
              type="button"
              className="flight-wrapper--button"
              onClick={() => openDeepLink()}
            >
              Search
            </button>
          </div>
        </Row>
      </Container>
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
