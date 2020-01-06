import React from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ExAutocomplete from '../common/ExAutocomplete';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import PassagerNumber from '../PassagerNumber';

import './FlightForm.scss';

class FlightForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  render() {
    const { autocompleteOptions } = this.props;
    return (
      <Container className="flight-wrapper">
        <Row>
          <Col className="fl-input">
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_from"
              options={autocompleteOptions}
              tflabel="from"
            />
            <ExAutocomplete
              className="fl-input__autocomplete fl-input__autocomplete_to"
              options={autocompleteOptions}
              tflabel="to"
            />
          </Col>
          <Col>
            <DateRangePicker
              startDateId="startDate"
              endDateId="endDate"
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onDatesChange={({ startDate, endDate }) => {
                this.setState({ startDate, endDate });
              }}
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => {
                this.setState({ focusedInput });
              }}
            />
          </Col>
          <Col>
            <PassagerNumber />
          </Col>
        </Row>
      </Container>
    );
  }
}

FlightForm.propTypes = {
  autocompleteOptions: PropTypes.array,
};

FlightForm.defaultProps = {
  autocompleteOptions: []
};

export default FlightForm;
