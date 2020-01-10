import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";
// bootstrap components
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { FormattedMessage } from "react-intl";
import locationService from "../../services/locationService";
// components
import FlightForm from "../../components/FlightForm";

import urls from "../../api/urls";
import './index.scss';

const HomeView = ({ flightFormState, onFlightFormChange, showOverlay, hideOverlay, overlay }) => {
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
      flightClass,
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
      <div className="booking-bar">
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="flight">
              <img src={require("../../images/ic-flight.png")} alt="flight" />
              <span>
                <FormattedMessage id="home.flight" />
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
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
            <Nav.Link>
              <img src={require("../../images/ic-hotel.png")} alt="Hotel" />
              <span>
                <FormattedMessage id="home.hotel" />
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img src={require("../../images/ic-rental.png")} alt="Rental" />
              <span>
                <FormattedMessage id="home.rental_car" />
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <img src={require("../../images/ic-SWISS.png")} alt="SWISS" />
              <span>
                <FormattedMessage id="home.swiss_choice" />
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Nav.Link eventKey="flight" className="active">
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
              onFocus={showOverlay}
              onBlur={hideOverlay}
              overlay={overlay}
            />
          </Tab.Pane>
          <Nav.Link>
            <img src={require("../../images/ic-stopover.png")} alt="Stopover" />
            <span>
              <FormattedMessage id="home.stopover" />
            </span>
          </Nav.Link>
          <Tab.Pane eventKey="stopover"></Tab.Pane>
          <Nav.Link>
            <img src={require("../../images/ic-hotel.png")} alt="Hotel" />
            <span>
              <FormattedMessage id="home.hotel" />
            </span>
          </Nav.Link>
          <Tab.Pane eventKey="hotel"></Tab.Pane>
          <Nav.Link>
            <img src={require("../../images/ic-rental.png")} alt="Rental" />
            <span>
              <FormattedMessage id="home.rental_car" />
            </span>
          </Nav.Link>
          <Tab.Pane eventKey="rental_car"></Tab.Pane>
          <Nav.Link>
            <img src={require("../../images/ic-SWISS.png")} alt="SWISS" />
            <span>
              <FormattedMessage id="home.swiss_choice" />
            </span>
          </Nav.Link>
          <Tab.Pane eventKey="swiss_choice"></Tab.Pane>
        </Tab.Content>
      </div>
    </Tab.Container>
  );
};

HomeView.propTypes = {
  flightFormState: PropTypes.object,
  onFlightFormChange: PropTypes.func,
  showOverlay: PropTypes.func,
  hideOverlay: PropTypes.func,
  overlay: PropTypes.object
};
HomeView.defaultProps = {
  flightFormState: {},
  onFlightFormChange: () => {},
  showOverlay: () => {},
  hideOverlay: () => {},
  overlay: {}
};

export default HomeView;
