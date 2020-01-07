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
      focusedInput: null
    };
  }

  render() {
    const {
      autocompleteOptions,
      onFlightFormChange,
      flightFormState: { adultAmount, childrenAmount, infantsAmount },
      openDeepLink
    } = this.props;

    return (
      <Container className="flight-wrapper">
        <Row>
          <Col className="fl-input">
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_from"
              options={autocompleteOptions}
              tflabel="From"
              onChange={(event, value) =>
                onFlightFormChange("origin", value && value.brief)
              }
            />
            <div className="fight-icon">
              <img src={require("../../images/fight.png")} alt="fight" />
            </div>
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_to"
              options={autocompleteOptions}
              tflabel="To"
              onChange={(event, value) =>
                onFlightFormChange("destination", value && value.brief)
              }
            />
          </Col>
          <Col>
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
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
            />
          </Col>
          <Col>
            <PassagerNumber
              amounts={{ adultAmount, childrenAmount, infantsAmount }}
              onChange={(fieldName, value) =>
                onFlightFormChange(fieldName, value)
              }
            />
          </Col>
        </Row>
        <Row>
          <Col />
          <Col />
          <Col>
            <button
              type="button"
              className="flight-wrapper--button"
              onClick={() => openDeepLink()}
            >
              Search
            </button>
          </Col>
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
