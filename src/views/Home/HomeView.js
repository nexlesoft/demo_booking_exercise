import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
// bootstrap components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { i18N } from "../../utils/intl";
// components
import FlightForm from "../../components/FlightForm";

import { AutocompleteOptions, DeepLink } from "../../constants/demoData";

const HomeView = ({ flightFormState, onFlightFormChange }) => {
  function openDeepLink() {
    const {
      origin,
      destination,
      flightType,
      departureDate,
      adultAmount,
      childrenAmount,
      infantsAmount,
      flightClass
    } = flightFormState;
    const deepLink = DeepLink.replace("<flight_type>", flightType)
      .replace("<origin>", origin)
      .replace("<destination>", destination)
      .replace("<departure_date>", moment(departureDate).format("YYYY-MM-DD"))
      .replace("<adult_amount>", adultAmount)
      .replace("<children_amount>", childrenAmount)
      .replace("<infants_amount>", infantsAmount)
      .replace("<flight_class>", flightClass);
    window.open(deepLink, "_blank");
  }

  return (
    <Tabs defaultActiveKey="flight" id="book-mask-tabs">
      <Tab
        eventKey="flight"
        title={<span className="icon-block flight-icon">Flight</span>}
      >
        <FlightForm
          autocompleteOptions={AutocompleteOptions}
          onFlightFormChange={onFlightFormChange}
          flightFormState={flightFormState}
          openDeepLink={openDeepLink}
        />
      </Tab>
      <Tab eventKey="Stopover" title="Stopover" disabled />
      <Tab eventKey="Hotel" title="Hotel" disabled />
      <Tab eventKey="Rental" title="Rental car" disabled />
      <Tab eventKey="SWISS" title="SWISS Choice" disabled />
    </Tabs>
  );
};

HomeView.propTypes = {
  flightFormState: PropTypes.object,
  onFlightFormChange: PropTypes.func
};
HomeView.defaultProps = {
  flightFormState: {},
  onFlightFormChange: () => {}
};

export default HomeView;
