import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// export default class CommentWrite extends Component {

//   constructor(props) {
//     super(props);

// this.state = {
//   id: setCommentID,
//   content: "",
//   commentor: this.props.currentUser.username,
//   postID: this.props.postID,
// };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (

//     );
//   }
// }

const CommentWrite = (props) => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(props);
  //추후 utill로 이동
  const setCommentID = () => {
    let today = new Date();
    let randomID = "xxxxyyyxyxy".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

    return `${today.getFullYear()}${today.getMonth() + 1}${today.getDate()}-${randomID}`;
  };

  const [state, setState] = useState({
    id: setCommentID(),
    content: "",
    commentor: store.currentUser.username,
    postID: props.postID,
  });

  const handleChange = (event) => {
    setState({ ...state, content: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({ ...state, id: setCommentID });

    dispatch({ type: "COMMENT_WRITE", params: state });
    setState({ ...state, content: "" });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="control-group">
              <div className="form-group">
                <label>댓글:</label>
              </div>
              <div className="form-group" style={{ display: "flex" }}>
                <textarea
                  className="form-control"
                  value={state.content}
                  onChange={handleChange}
                  placeholder="바르고 고운말만 입력해주세요 :)"
                />
                <input type="submit" value="확인" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentWrite;
