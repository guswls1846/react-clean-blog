import { connect } from "react-redux";
import CommentList from "../components/CommentList";

function commentListState(state) {
  return { posts: state.posts, currentUser: state.currentUser.username };
}

function commentListDispatch(dispatch) {
  return {
    commentRemove: (id, postID) => {
      console.log(postID);

      dispatch({ type: "COMMENT_REMOVE", id: id, postID: postID });
    },
  };
}
export default connect(commentListState, commentListDispatch)(CommentList);
