import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CommentList = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const onRemoveButton = (comment) => {
    if (comment.commentor === state.currentUser) {
      return <button onClick={(e) => onCommentRemove(comment, e)}>x</button>;
    }
  };

  const onCommentRemove = (comment, e) => {
    e.preventDefault();
    // console.log(comment);
    alert("정말 삭제하겠습니까?");
    dispatch({ type: "COMMENT_REMOVE", id: comment.id, postID: comment.postID });
  };

  const postID = props.postID;
  const comments = [];
  for (let i = 0; i < state.posts.length; i++) {
    let post = state.posts[i];
    if (post.id === postID) {
      for (const comment of post.comments) {
        comments.push(
          <div className="row" key={comment.id}>
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-preview" style={{ borderBottom: "1px solid #d8d8d8" }}>
                <div className="post-content" style={{ display: "flex", justifyContent: "space-between" }}>
                  {comment.commentor} {onRemoveButton(comment)}
                </div>
                <span className="post-content">{comment.content}</span>
              </div>
            </div>
          </div>
        );
      }
    }
  }
  return <div className="container">{comments}</div>;
};

export default CommentList;
