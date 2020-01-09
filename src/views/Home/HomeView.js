import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
// bootstrap components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
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
    const deepLink = urls.home.booking
      .replace("<flight_type>", flightType)
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
    <Tab.Container id="booking-tabs" defaultActiveKey="flight">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="flight">
                <img src={require("../../images/ic-flight.png")} alt="flight" />
                <span>
                  <FormattedMessage id="home.flight" />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="stopover">
                <img
                  src={require("../../images/ic-stopover.png")}
                  alt="Stopover"
                />
                <span>
                  <FormattedMessage id="home.stopover" />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="hotel">
                <img src={require("../../images/ic-hotel.png")} alt="Hotel" />
                <span>
                  <FormattedMessage id="home.hotel" />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="rental_car">
                <img src={require("../../images/ic-rental.png")} alt="Rental" />
                <span>
                  <FormattedMessage id="home.rental_car" />
                </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="swiss_choice">
                <img src={require("../../images/ic-SWISS.png")} alt="SWISS" />
                <span>
                  <FormattedMessage id="home.swiss_choice" />
                </span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Nav.Link eventKey="flight">
              <img src={require("../../images/ic-flight.png")} alt="flight" />
              <span>
                <FormattedMessage id="home.flight" />
              </span>
            </Nav.Link>
            <Tab.Pane eventKey="flight">
              <FlightForm
                autocompleteOptions={autocompleteOptions}
                onFlightFormChange={onFlightFormChange}
                flightFormState={flightFormState}
                openDeepLink={openDeepLink}
              />
            </Tab.Pane>
            <Nav.Link eventKey="stopover">
              <img
                src={require("../../images/ic-stopover.png")}
                alt="Stopover"
              />
              <span>
                <FormattedMessage id="home.stopover" />
              </span>
            </Nav.Link>
            <Tab.Pane eventKey="stopover"></Tab.Pane>
            <Nav.Link eventKey="hotel">
              <img src={require("../../images/ic-hotel.png")} alt="Hotel" />
              <span>
                <FormattedMessage id="home.hotel" />
              </span>
            </Nav.Link>
            <Tab.Pane eventKey="hotel"></Tab.Pane>
            <Nav.Link eventKey="rental_car">
              <img src={require("../../images/ic-rental.png")} alt="Rental" />
              <span>
                <FormattedMessage id="home.rental_car" />
              </span>
            </Nav.Link>
            <Tab.Pane eventKey="rental_car"></Tab.Pane>
            <Nav.Link eventKey="swiss_choice">
              <img src={require("../../images/ic-SWISS.png")} alt="SWISS" />
              <span>
                <FormattedMessage id="home.swiss_choice" />
              </span>
            </Nav.Link>
            <Tab.Pane eventKey="swiss_choice"></Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
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
