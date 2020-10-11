/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";

export default class PostView extends Component {
  render() {
    const { params } = this.props.match;
    let postData = "";

    for (const post of this.props.posts) {
      if (post.id == params.id) {
        postData = post;
        console.log(postData);
      }
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1>{postData.title}</h1>

            <h3 className="post-content">{postData.content}</h3>

            <p style={{ color: "grey", textAlign: "center" }} className="post-meta">
              <i>Posted by {postData.author}</i>
              <i>
                <a href="#" style={{ color: "grey", textDecoration: "none" }}></a>
              </i>
            </p>
          </div>
        </div>
        <CommentWrite></CommentWrite>
        <CommentList></CommentList>
        {/* <div className="clearfix text-center mx-auto">
          <a className="btn btn-light pointer">
            Delete Post
            <i className="" aria-hidden="true">
              {" "}
            </i>
          </a>
        </div> */}
      </div>
    );
  }
}
