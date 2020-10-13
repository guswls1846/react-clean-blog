import { connect } from "react-redux";
import CommentWrite from "../components/CommentWrite";

function commentListState(state) {
  return { currentUser: state.currentUser };
}

function commentListDispatch(dispatch) {
  return {
    commentWrite: (params) => {
      dispatch({ type: "COMMENT_WRITE", params: params });
    },
  };
}
export default connect(commentListState, commentListDispatch)(CommentWrite);
