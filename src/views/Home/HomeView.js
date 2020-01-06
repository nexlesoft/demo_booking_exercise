import React from "react";
import { Link } from "react-router-dom";
// bootstrap components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { i18N } from "../../utils/intl";
// components
import FlightForm from "../../components/FlightForm";

import { AutocompleteOptions } from "../../constants/demoData";

const HomeView = () => {
  return (
    <Tabs defaultActiveKey="flight" id="book-mask-tabs">
      <Tab eventKey="flight" title="Flight">
        <FlightForm autocompleteOptions={AutocompleteOptions} />
      </Tab>
      <Tab eventKey="Hotel" title="Hotel">
        &npsb;
      </Tab>
      <Tab eventKey="Rental" title="Rental car">
        &npsb;
      </Tab>
      <Tab eventKey="SWISS" title="SWISS Choice">
        &npsb;
      </Tab>
    </Tabs>
  );
};

export default HomeView;
