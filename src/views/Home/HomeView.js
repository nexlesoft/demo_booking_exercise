import React from "react";
import { Link } from "react-router-dom";
// bootstrap components
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { i18N } from "../../utils/intl";
// components
import FlightForm from "../../components/FlightForm";

import { AutocompleteOptions } from '../../constants/demoData';

const HomeView = () => {
  return (
    <div>
      <Tabs defaultActiveKey="flight" id="book-mask-tabs">
        <Tab eventKey="flight" title="Flight">
          <FlightForm autocompleteOptions={AutocompleteOptions} />
        </Tab>
        <Tab eventKey="stopover" title="Stopover">
          &npsb;
        </Tab>
        <Tab eventKey="hotel" title="Hotel" disabled>
          &npsb;
        </Tab>
      </Tabs>
    </div>
  );
};

export default HomeView;
