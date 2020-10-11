import { connect } from "react-redux";
import PostView from "../components/PostView";

function postViewState(state) {
  return { posts: state.posts };
}

function postViewDispatch(dispatch) {
  return {
    // login: (username, password) => {
    //   console.log(username, password);
    //   dispatch({ type: "LOGIN", username: username, password: password });
    // },
  };
}
export default connect(postViewState, postViewDispatch)(PostView);
