import React from "react";
import { Link } from "react-router-dom";

const PostList = (props) => {
  const posts = [];
  for (let i = 0; i < props.currentPosts.length; i++) {
    let post = props.currentPosts[i];

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
};

export default PostList;
