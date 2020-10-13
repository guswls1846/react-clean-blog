import { connect } from "react-redux";
import PostView from "../components/PostView";

function postViewState(state) {
  return { posts: state.posts, currentUser: state.currentUser.username };
}

function postViewDispatch(dispatch) {
  return {
    postRemove: (id) => {
      dispatch({ type: "POST_REMOVE", id: id });
    },
  };
}
export default connect(postViewState, postViewDispatch)(PostView);
