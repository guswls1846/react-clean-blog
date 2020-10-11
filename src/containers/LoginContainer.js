import { connect } from "react-redux";
import Login from "../components/Login";
import store from "../store";
function loginPageState(state) {
  return { currentUser: state.currentUser, logined: state.logined };
}

function loginPageDispatch(dispatch) {
  return {
    login: (username, password) => {
      console.log(username, password);
      dispatch({ type: "LOGIN", username: username, password: password });
    },
  };
}
export default connect(loginPageState, loginPageDispatch)(Login);
