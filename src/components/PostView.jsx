/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

import CommentWriteContainer from "../containers/CommentWriteContainer";
import CommentListContainer from "../containers/CommentListContainer";
export default class PostView extends Component {
  removeButton(postData) {
    if (postData.author === this.props.currentUser) {
      return (
        <div className="clearfix text-right mx-auto" onClick={(e) => this.onPostRemove(postData, e)}>
          <a className="btn btn-light pointer">게시글 삭제</a>
        </div>
      );
    }
  }

  onPostRemove(postData, e) {
    e.preventDefault();
    // console.log(comment);
    alert("정말 삭제하겠습니까?");
    this.props.postRemove(postData.id);
    this.props.history.push("/");
  }

  render() {
    const { params } = this.props.match;
    let postData = "";

    for (const post of this.props.posts) {
      if (post.id === params.id) {
        postData = post;
      }
    }
    function chageHtml(content) {
      return { __html: content };
    }

    function innerHtml(content) {
      return <h3 className="post-content" dangerouslySetInnerHTML={chageHtml(`${content}`)}></h3>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1>{postData.title}</h1>
            {innerHtml(postData.content)}
            {this.removeButton(postData)}
            <p style={{ color: "grey", textAlign: "center" }} className="post-meta">
              <i>Posted by {postData.author}</i>
              <i>
                <a href="#" style={{ color: "grey", textDecoration: "none" }}></a>
              </i>
            </p>
          </div>
        </div>
        <CommentWriteContainer postID={postData.id}></CommentWriteContainer>
        <CommentListContainer postID={postData.id}></CommentListContainer>
      </div>
    );
  }
}
