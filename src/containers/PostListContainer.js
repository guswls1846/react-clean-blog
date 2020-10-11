import { connect } from "react-redux";
import PostList from "../components/PostList";

function postListState(state) {
  return { posts: state.posts };
}

function postListDispatch(dispatch) {
  return {
    // login: (username, password) => {
    //   console.log(username, password);
    //   dispatch({ type: "LOGIN", username: username, password: password });
    // },
  };
}
export default connect(postListState, postListDispatch)(PostList);
