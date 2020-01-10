/* eslint-disable react/destructuring-assignment */
import { Route, Switch } from "react-router-dom";
import React from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NotFoundView } from ".";
import { Loading } from "../components/common";
import { messages_en, messages_vi } from "../translations";
// import { pathKeys } from "../constants";
import { HomePage } from "../containers";

const messages = {
  en: messages_en,
  vi: messages_vi
};

class App extends React.PureComponent {
  render() {
    const language = this.props.locale || navigator.language.split(/[-_]/)[0];
    return (
      <IntlProvider
        key={language}
        locale={language}
        messages={messages[language]}
      >
        <>
          {this.props.overlay && <div className="booking-form-overlay" />}
          <Loading loading={this.props.loading} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFoundView} />
          </Switch>
        </>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    locale: state.localeReducer.locale,
    loading: state.loadingReducer.loading,
    overlay: state.overlayReducer.overlay
  };
};

App.propTypes = {
  locale: PropTypes.string,
  loading: PropTypes.bool
};

App.defaultProps = {
  locale: "",
  loading: false
};

export default connect(mapStateToProps)(App);
