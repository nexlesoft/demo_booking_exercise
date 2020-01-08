import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
// bootstrap components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { FormattedMessage } from "react-intl";
import locationService from "../../services/locationService";

// components
import FlightForm from "../../components/FlightForm";

import urls from "../../api/urls";

const HomeView = ({ flightFormState, onFlightFormChange }) => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  useEffect(() => {
    locationService.autocompleteOptions().then(res => {
      setAutocompleteOptions(res.data);
    });
  }, []);

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
    const deepLink = urls.home.booking.replace("<flight_type>", flightType)
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
        title={(
<>
            <img src={require("../../images/ic-flight.png")} alt="flight" />
            <span><FormattedMessage id="home.flight" /></span>
          </>
)}
      >
        <FlightForm
          autocompleteOptions={autocompleteOptions}
          onFlightFormChange={onFlightFormChange}
          flightFormState={flightFormState}
          openDeepLink={openDeepLink}
        />
      </Tab>
      <Tab
        disabled
        eventKey="Stopover"
        title={(
<>
            <img src={require("../../images/ic-stopover.png")} alt="Stopover" />
            <span><FormattedMessage id="home.stopover" /></span>
          </>
)}
      />
      <Tab
        disabled
        eventKey="Hotel"
        title={(
<>
            <img src={require("../../images/ic-hotel.png")} alt="Hotel" />
            <span><FormattedMessage id="home.hotel" /></span>
          </>
)}
      />
      <Tab
        disabled
        eventKey="Rental"
        title={(
<>
            <img src={require("../../images/ic-rental.png")} alt="Rental" />
            <span><FormattedMessage id="home.rental_car" /></span>
          </>
)}
      />
      <Tab
        disabled
        eventKey="SWISS"
        title={(
<>
            <img src={require("../../images/ic-SWISS.png")} alt="SWISS" />
            <span><FormattedMessage id="home.swiss_choice" /></span>
          </>
)}
      />
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
