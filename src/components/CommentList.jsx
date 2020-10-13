import React, { Component } from "react";

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.removeButton = this.removeButton.bind(this);
    this.onCommentRemove = this.onCommentRemove.bind(this);
  }
  removeButton(comment) {
    if (comment.commentor === this.props.currentUser) {
      return <button onClick={(e) => this.onCommentRemove(comment, e)}>x</button>;
    }
  }
  onCommentRemove(comment, e) {
    e.preventDefault();
    // console.log(comment);
    alert("정말 삭제하겠습니까?");
    this.props.commentRemove(comment.id, comment.postID);
  }

  render() {
    const postID = this.props.postID;
    const comments = [];
    for (let i = 0; i < this.props.posts.length; i++) {
      let post = this.props.posts[i];
      if (post.id === postID) {
        for (const comment of post.comments) {
          comments.push(
            <div className="row" key={comment.id}>
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="post-preview" style={{ borderBottom: "1px solid #d8d8d8" }}>
                  <div className="post-content" style={{ display: "flex", justifyContent: "space-between" }}>
                    {comment.commentor} {this.removeButton(comment)}
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
  }
}
