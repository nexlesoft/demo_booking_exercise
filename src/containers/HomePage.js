import { connect } from "react-redux";
import { HomeView } from "../views";
import { flightFormActions, appActions } from "../redux/actions";

const mapStateToProps = state => {
  return {
    flightFormState: state.flightFormReducer,
    overlay: state.overlayReducer
  };
};

const mapDispatchToProps = {
  onFlightFormChange: flightFormActions.onFlightFormChange,
  showOverlay: appActions.showOverlay,
  hideOverlay: appActions.hideOverlay
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
