import { connect } from "react-redux";
import Home from "../components/Home";

function homeState(state) {
  return { posts: state.posts, currentPage: state.currentPage, setCurrentPage: state.setCurrentPage, postsPerPage: 5 };
}

function homeDispatch(dispatch) {
  return {};
}
export default connect(homeState, homeDispatch)(Home);
