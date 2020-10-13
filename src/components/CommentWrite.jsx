import React, { Component } from "react";

export default class CommentWrite extends Component {
  constructor(props) {
    super(props);
    const setCommentID = this.setCommentID();
    this.state = {
      id: setCommentID,
      content: "",
      commentor: this.props.currentUser.username,
      postID: this.props.postID,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setCommentID() {
    let today = new Date();
    let randomID = "xxxxyyyxyxy".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    return `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}-${randomID}`;
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const setCommentID = this.setCommentID();
    this.setState({ id: setCommentID });
    this.props.commentWrite(this.state);
    this.setState({ content: "" });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form onSubmit={this.handleSubmit}>
              <div className="control-group">
                <div className="form-group">
                  <label>댓글:</label>
                </div>
                <div className="form-group" style={{ display: "flex" }}>
                  <textarea className="form-control" value={this.state.content} onChange={this.handleChange} placeholder="바르고 고운말만 입력해주세요 :)" />
                  <input type="submit" value="확인" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
