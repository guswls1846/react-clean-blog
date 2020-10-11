import { createStore } from "redux";
import createReducer from "./common/createReducer";
const initState = {
  logined: false,
  loginModalState: false,
  currentUser: { username: null, password: null },
  posts: [
    { id: 1, title: "샘플1", author: "김현진", content: "샘플1 내용입니다." },
    { id: 2, title: "샘플2", author: "김나눔", content: "샘플2 내용입니다." },
    { id: 3, title: "샘플3", author: "강수정", content: "샘플3 내용입니다." },
    { id: 4, title: "샘플4", author: "공명훈", content: "샘플4 내용입니다." },
    { id: 5, title: "샘플5", author: "이원효", content: "샘플5 내용입니다." },
  ],
};

const reducer = createReducer(initState, {
  LOGIN: (state, action) => {
    state.logined = true;
    state.currentUser.username = action.username;
    state.currentUser.password = action.password;
  },
  LOGOUT: (state, action) => {
    state.logined = false;
    state.currentUser = { username: null, password: null };
  },
});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
