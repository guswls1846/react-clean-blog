import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

const PostWrite = withRouter((props) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const setPostID = () => {
    let today = new Date();

    let randomID = "xxxxyyyxyxy".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    return `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}-${randomID}`;
  };

  const [state, setState] = useState({
    id: setPostID(),
    title: "",
    author: store.currentUser.username,
    content: "",
    comments: [],
  });

  const handleNameChange = (event) => {
    setState({ ...state, title: event.target.value });
  };

  const handleContentChange = (event) => {
    setState({ ...state, content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "POST_WRITE", params: state });
    props.history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="control-group">
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={state.title}
                  onChange={handleNameChange}
                />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" placeholder="Author" value={state.author} readOnly />
              </div>
            </div>
            <div className="control-group">
              <div className="form-group">
                <label>Content</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Content"
                  value={state.content}
                  onChange={handleContentChange}
                />
              </div>
            </div>

            <br />

            <div className="form-group text-center mx-auto">
              <button className="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});

export default PostWrite;
