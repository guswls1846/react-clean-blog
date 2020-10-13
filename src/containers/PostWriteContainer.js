import { connect } from "react-redux";
import PostWrite from "../components/PostWrite";

function postWriteState(state) {
  return { loggined: state.loggined, currentUser: state.currentUser };
}

function postWriteDispatch(dispatch) {
  return {
    postWrite: (params) => {
      console.log(params);

      dispatch({ type: "POST_WRITE", params: params });
    },
  };
}
export default connect(postWriteState, postWriteDispatch)(PostWrite);
