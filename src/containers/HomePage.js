import { connect } from "react-redux";
import { HomeView } from "../views";
import { flightFormActions } from "../redux/actions";

const mapStateToProps = state => {
  return {
    flightFormState: state.flightFormReducer
  };
};

const mapDispatchToProps = {
  onFlightFormChange: flightFormActions.onFlightFormChange
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
