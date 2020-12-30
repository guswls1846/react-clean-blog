import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";
import { withRouter } from "react-router";

const PostView = withRouter((props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { params } = props.match;
  let postData = "";

  for (const post of state.posts) {
    if (post.id === params.id) {
      postData = post;
    }
  }
  const chageHtml = (content) => {
    return { __html: content };
  };
  const onPostRemove = (postData, e) => {
    e.preventDefault();

    alert("정말 삭제하겠습니까?");
    dispatch({ type: "POST_REMOVE", id: postData.id });
    props.history.push("/");
  };

  const removeButton = (postData) => {
    if (postData.author === state.currentUser.username) {
      return (
        <div className="clearfix text-right mx-auto" onClick={(e) => onPostRemove(postData, e)}>
          <a className="btn btn-light pointer">게시글 삭제</a>
        </div>
      );
    }
  };
  const innerHtml = (content) => {
    return <h3 className="post-content" dangerouslySetInnerHTML={chageHtml(`${content}`)}></h3>;
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <h1>{postData.title}</h1>
          {innerHtml(postData.content)}
          {removeButton(postData)}
          <p style={{ color: "grey", textAlign: "center" }} className="post-meta">
            <i>Posted by {postData.author}</i>
            <i>
              <a href="#" style={{ color: "grey", textDecoration: "none" }}></a>
            </i>
          </p>
        </div>
      </div>
      <CommentWrite postID={postData.id}></CommentWrite>
      <CommentList postID={postData.id}></CommentList>
    </div>
  );
});

export default PostView;
