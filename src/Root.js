import React, { Component } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./views";
import { Provider as ReduxProvider } from "react-redux";
import ReduxToastr from "react-redux-toastr";

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <ReduxProvider store={store}>
        <Router>
          <App/>
        </Router>

        <ReduxToastr
          timeOut={2000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          getState={state => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar={false}
          closeOnToastrClick
        />
      </ReduxProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};
