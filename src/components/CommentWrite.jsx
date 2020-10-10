import React, { Component } from "react";

export default class CommentWrite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "바르고 고운말만 입력해주세요 ^.^",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("An essay was submitted: " + this.state.value);
    event.preventDefault();
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
                  <textarea className="form-control" value={this.state.value} onChange={this.handleChange} />
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
