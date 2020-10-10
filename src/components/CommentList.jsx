import React, { Component } from "react";

export default class CommentList extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="post-preview" style={{ borderBottom: "1px solid #d8d8d8" }}>
              <div className="post-content">현진</div>
              <span className="post-content">님짱!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
