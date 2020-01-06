import { connect } from "react-redux";
import { LoginView } from "../views";
import { loginActions } from "../redux/actions";

const mapStateToProps = state => {
  return {
    loginUser: state.loginReducer
  };
};

const mapDispatchToProps = {
  loginManual: loginActions.loginManual,
  setMemberDetail: loginActions.setMemberDetail
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
