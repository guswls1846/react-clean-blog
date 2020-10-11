import { connect } from "react-redux";
import Navbar from "../components/Navbar";
function navbarState(state) {
  return { logined: state.logined };
}
function navbarDispatch(dispatch) {
  return {
    onLogOut: () => {
      dispatch({ type: "LOGOUT" });
    },
  };
}
export default connect(navbarState, navbarDispatch)(Navbar);
