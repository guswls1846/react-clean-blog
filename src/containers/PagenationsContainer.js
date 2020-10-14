import { connect } from "react-redux";
import Pagenations from "../components/Pagenations";

function pagenationsState(state) {
  return { posts: state.posts, paginate: state.currentPage };
}

function pagenationsDispatch(dispatch) {
  return {
    changePage: (currentPage) => {
      dispatch({ type: "CHANGE_PAGE", currentPage: currentPage });
    },
  };
}
export default connect(pagenationsState, pagenationsDispatch)(Pagenations);
