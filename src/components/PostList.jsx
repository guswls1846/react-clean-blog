import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PostList extends Component {
  render() {
    return (
      <div className="post-preview">
        <Link to="/post-view/1" className="pointer">
          <h2 className="post-title">test</h2>
          <h3 className="post-subtitle">test</h3>
        </Link>

        <p className="post-meta">
          Posted by
          <a href="#"></a>
        </p>
      </div>
    );
  }
}
