/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class PostList extends Component {
  render() {
    const posts = [];
    for (let i = 0; i < this.props.currentPosts.length; i++) {
      let post = this.props.currentPosts[i];

      posts.push(
        <div className="post-preview" key={post.id}>
          <Link to={`/post-view/${post.id}`} className="pointer">
            <h2 className="post-title">{post.title}</h2>
          </Link>

          <p className="post-meta">
            Posted by {post.author}
            <a href="#"></a>
          </p>
        </div>
      );
    }

    return <div>{posts}</div>;
  }
}
