/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import CommentWrite from "./CommentWrite";
import CommentList from "./CommentList";

export default class PostView extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1>test</h1>

            <h3 className="post-content">test</h3>

            {/* <p style={{ color: "grey", textAlign: "center" }} className="post-meta">
              <i>Posted by </i>
              <i>
                <a href="#" style={{ color: "grey", textDecoration: "none" }}></a>
              </i>
            </p> */}
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
