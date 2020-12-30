import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Pagination from "react-bootstrap/Pagination";

const Pagenations = withRouter((props) => {
  const items = [];
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  const pageChanged = (e) => {
    let num = Number(e.target.text);
    if (!!num) {
      console.log(e.target.text);
      dispatch({ type: "CHANGE_PAGE", currentPage: num });
    }
  };

  let active = state.currentPage;

  for (let i = 1; i <= Math.ceil(props.totalPosts / state.postsPerPage); i++) {
    items.push(
      <Pagination.Item key={i} active={i === active}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className="row">
      <div className="col-lg-8 col-md-10 mx-auto">
        <ul className="pagination" style={{ justifyContent: "center" }}>
          <Pagination onClick={pageChanged}>{items}</Pagination>
        </ul>
      </div>
    </div>
  );
});

export default Pagenations;
