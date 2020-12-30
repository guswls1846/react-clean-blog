import createReducer from "./createReducer";

const initState = {
  loggined: false,
  loginModalState: false,
  currentUser: { username: null, password: null },
  posts: [
    {
      id: "1",
      title: "샘플1",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "1", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "2",
      title: "샘플2",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "2", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "3",
      title: "샘플3",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "3", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "4",
      title: "샘플4",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "4", commentor: "김현진", content: "샘플1 댓글" }],
    },

    {
      id: "5",
      title: "샘플5",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "5", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "6",
      title: "샘플6",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "6", commentor: "김현진", content: "샘플1 댓글" }],
    },

    {
      id: "7",
      title: "샘플7",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "7", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "8",
      title: "샘플8",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "8", commentor: "김현진", content: "샘플1 댓글" }],
    },

    {
      id: "9",
      title: "샘플9",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "9", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "10",
      title: "샘플10",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "10", commentor: "김현진", content: "샘플1 댓글" }],
    },

    {
      id: "11",
      title: "샘플11",
      author: "김현진",
      content: "샘플1 내용입니다.",
      comments: [{ id: "1", postID: "11", commentor: "김현진", content: "샘플1 댓글" }],
    },
    {
      id: "12",
      title: "샘플12",
      author: "김나눔",
      content: "샘플2 내용입니다.",
      comments: [{ id: "1", postID: "12", commentor: "김현진", content: "샘플1 댓글" }],
    },
  ],
  currentPage: 1,
  setCurrentPage: 1,
  postsPerPage: 5,
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

  CHANGE_PAGE: (state, action) => {
    state.currentPage = action.currentPage;
    // state.setCurrentPage = action.currentPage;
  },
});

export default reducer;
