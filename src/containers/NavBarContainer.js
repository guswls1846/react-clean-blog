import { connect } from "react-redux";
import Navbar from "../components/Navbar";
function navbarState(state) {
  return { loggined: state.loggined };
}
function navbarDispatch(dispatch) {
  return {
    onLogOut: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
}
export default connect(navbarState, navbarDispatch)(Navbar);
