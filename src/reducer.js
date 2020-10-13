import createReducer from "./common/createReducer";

const initState = {
  loggined: false,
  loginModalState: false,
  currentUser: { username: null, password: null },
  posts: [
    { id: "1", title: "샘플1", author: "김현진", content: "샘플1 내용입니다.", comments: [{ id: "1", postID: "1", commentor: "김현진", content: "샘플1 댓글" }] },
    { id: "2", title: "샘플2", author: "김나눔", content: "샘플2 내용입니다.", comments: [{ id: "1", postID: "2", commentor: "김현진", content: "샘플1 댓글" }] },
  ],
};

const reducer = createReducer(initState, {
  LOGIN: (state, action) => {
    state.loggined = true;
    state.currentUser.username = action.username;
    state.currentUser.password = action.password;
  },
  LOGOUT: (state, action) => {
    state.loggined = false;
    state.currentUser = { username: null, password: null };
  },
  POST_WRITE: (state, action) => {
    state.posts.push(action.params);
  },
  POST_REMOVE: (state, action) => {
    let postIdx = state.posts.findIndex((x) => {
      return x.id === action.id;
    });

    state.posts.splice(postIdx, 1);
  },
  COMMENT_WRITE: (state, action) => {
    let idx = state.posts.findIndex((x) => {
      return x.id === action.params.postID;
    });

    state.posts[idx].comments.push(action.params);
  },
  COMMENT_REMOVE: (state, action) => {
    let postIdx = state.posts.findIndex((x) => {
      return x.id === action.postID;
    });

    let commentIdx = state.posts[postIdx].comments.findIndex((x) => {
      return x.id === action.id;
    });

    state.posts[postIdx].comments.splice(commentIdx, 1);
  },
});

export default reducer;
